#!/usr/bin/env bash
set -Eeuo pipefail

cd /var/www/orpheus

PROJECT="$PWD"
PORT=4183
DOMAIN="orpheusfinancial.co"

CONFIG="/etc/nginx/sites-enabled/orpheusfinancial"
OLD_ROOT="/var/www/orpheus-private-banking-release-20261123"
CURRENT="$PROJECT/current"
RELEASES="$PROJECT/releases"
RELEASE="$RELEASES/$(date +%Y%m%d-%H%M%S)"

BACKUP="$HOME/orpheus-nginx-deploy-backup.conf"
PREVIOUS=""

cleanup() {
    if [ -n "${PREVIEW_PID:-}" ]; then
        kill "$PREVIEW_PID" 2>/dev/null || true
        wait "$PREVIEW_PID" 2>/dev/null || true
    fi
}

rollback() {
    echo "Deployment failed. Restoring previous website."

    if [ -n "$PREVIOUS" ]; then
        ln -s "$PREVIOUS" "$PROJECT/current-rollback"
        mv -Tf "$PROJECT/current-rollback" "$CURRENT"
    fi

    sudo cp "$BACKUP" "$CONFIG"
    sudo nginx -t
    sudo systemctl reload nginx
}

trap cleanup EXIT

echo "=== Checking project ==="

test -f scripts/prerender.mjs
test -f scripts/generate-seo.mjs
test -d node_modules

node -e "import('puppeteer')" >/dev/null

if curl -fsS "http://127.0.0.1:$PORT/" -o /dev/null 2>/dev/null; then
    echo "STOP: Preview port $PORT is already occupied"
    exit 1
fi

echo "=== Building website ==="

npm run build
node scripts/generate-seo.mjs dist

echo "=== Starting temporary preview ==="

npm run preview -- \
    --host 127.0.0.1 \
    --port "$PORT" \
    --strictPort \
    > /tmp/orpheus-deploy-preview.log 2>&1 &

PREVIEW_PID=$!

READY=0

for i in $(seq 1 30); do
    if curl -fsS "http://127.0.0.1:$PORT/" -o /dev/null 2>/dev/null; then
        READY=1
        break
    fi

    if ! kill -0 "$PREVIEW_PID" 2>/dev/null; then
        break
    fi

    sleep 1
done

if [ "$READY" -ne 1 ]; then
    cat /tmp/orpheus-deploy-preview.log
    exit 1
fi

echo "=== Prerendering all SEO pages ==="

PRERENDER_BASE="http://127.0.0.1:$PORT" \
    node scripts/prerender.mjs "$PROJECT/dist"

echo "=== Validating build ==="

python3 - <<'PY'
from pathlib import Path
import xml.etree.ElementTree as ET

root = Path("dist")
urls = [
    e.text for e in ET.parse(root / "sitemap.xml").iter()
    if e.tag.endswith("loc") and e.text
]

assert len(urls) == 43, f"Expected 43 URLs, got {len(urls)}"

blog = (root / "blog.html").read_text()
article = (
    root / "blog/private-banking-for-founders-in-uae.html"
).read_text()

assert "private-banking-for-founders-in-uae" in blog
assert "Raising money does not make a founder" in article
assert 'rel="canonical"' in article
assert '"BlogPosting"' in article

for name in (
    "Blog_PB_Hero_Threshold.png",
    "Blog_PB_Chart_Spread.png",
    "Blog_PB_Chart_TwoDoors.png",
):
    assert (root / "images" / name).is_file()

print("BUILD VALIDATION PASSED")
PY

echo "=== Preparing release ==="

mkdir -p "$RELEASES"
mkdir "$RELEASE"
cp -a dist/. "$RELEASE/"

test -f "$RELEASE/blog.html"

if [ -L "$CURRENT" ]; then
    PREVIOUS=$(readlink -f "$CURRENT")
elif [ -e "$CURRENT" ]; then
    echo "STOP: $CURRENT exists but is not a symlink"
    exit 1
fi

echo "=== Checking Nginx ==="

sudo cp "$CONFIG" "$BACKUP"

if ! sudo grep -Fq "root $OLD_ROOT;" "$CONFIG" &&
   ! sudo grep -Fq "root $CURRENT;" "$CONFIG"; then
    echo "STOP: Unexpected Nginx document root"
    exit 1
fi

echo "=== Publishing new release ==="

trap rollback ERR

ln -s "$RELEASE" "$PROJECT/current-next"
mv -Tf "$PROJECT/current-next" "$CURRENT"

sudo sed -i \
    "s|root $OLD_ROOT;|root $CURRENT;|" \
    "$CONFIG"

sudo nginx -t
sudo systemctl reload nginx

echo "=== Verifying production ==="

LIVE_OK=0

for attempt in $(seq 1 10); do
    if curl -fsS \
        --noproxy '*' \
        --max-time 10 \
        --resolve "$DOMAIN:443:127.0.0.1" \
        -H 'Connection: close' \
        "https://$DOMAIN/blog" \
        -o /tmp/orpheus-live-blog-check.html &&
       grep -Fq \
        "private-banking-for-founders-in-uae" \
        /tmp/orpheus-live-blog-check.html; then

        LIVE_OK=1
        break
    fi

    sleep 2
done

test "$LIVE_OK" -eq 1

curl -fsS \
    --noproxy '*' \
    --resolve "$DOMAIN:443:127.0.0.1" \
    "https://$DOMAIN/blog/private-banking-for-founders-in-uae" \
    -o /tmp/orpheus-live-article-check.html

grep -Fq \
    "Raising money does not make a founder" \
    /tmp/orpheus-live-article-check.html

trap - ERR

echo
echo "===================================="
echo "DEPLOYMENT SUCCESSFUL"
echo "===================================="
echo "Live: $CURRENT"
echo "Release: $RELEASE"
echo "Previous: ${PREVIOUS:-$OLD_ROOT}"
