import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer";

const DIST =
  process.argv[2] || "/home/ubuntu/orpheus-seo-test-build";

const BASE = process.env.PRERENDER_BASE || "http://127.0.0.1:4173";
const SITE = "https://orpheusfinancial.co";

const sitemap = fs.readFileSync(
  path.join(DIST, "sitemap.xml"),
  "utf8"
);

const urls = [
  ...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)
].map(match => match[1].trim());

if (urls.length !== 43 || new Set(urls).size !== urls.length) {
  throw new Error(
    `Expected 43 unique sitemap URLs, found ${urls.length}`
  );
}

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"]
});

const generated = [];

try {
  for (const url of urls) {
    const parsed = new URL(url);

    if (
      parsed.origin !== SITE ||
      parsed.search ||
      parsed.hash ||
      parsed.pathname.includes("..")
    ) {
      throw new Error(`Invalid sitemap URL: ${url}`);
    }

    const route = parsed.pathname;

    const filename = route === "/"
      ? path.join(DIST, "index.html")
      : path.join(DIST, route.slice(1) + ".html");

    const template = fs.readFileSync(filename, "utf8");

    if (!/<div\s+id=["']root["']\s*>\s*<\/div>/i.test(template)) {
      throw new Error(`Unexpected React root in ${route}`);
    }

    const page = await browser.newPage();

    try {
      const response = await page.goto(BASE + route, {
        waitUntil: "networkidle2",
        timeout: 45000
      });

      if (!response || response.status() !== 200) {
        throw new Error(`HTTP ${response?.status()} on ${route}`);
      }

      await page.waitForFunction(
        () => {
          const root = document.querySelector("#root");
          const h1 = root?.querySelectorAll("h1");

          return (
            root &&
            root.innerText.trim().length > 100 &&
            h1?.length === 1 &&
            !root.innerText.includes("Loading advisory desk...")
          );
        },
        { timeout: 30000 }
      );

      await page.evaluate(() => document.fonts.ready);

      const result = await page.evaluate(() => {
        const root = document.querySelector("#root");

        return {
          html: root.innerHTML,
          textLength: root.innerText.trim().length,
          h1: root.querySelector("h1")?.innerText.trim()
        };
      });

      if (
        route.startsWith("/blog/") &&
        result.textLength < 500
      ) {
        throw new Error(`Article content too short: ${route}`);
      }

      const html = template.replace(
        /<div\s+id=["']root["']\s*>\s*<\/div>/i,
        `<div id="root">${result.html}</div>`
      );

      if (!result.html.toLowerCase().includes("<h1")) {
        throw new Error(`H1 missing in generated HTML: ${route}`);
      }

      if (!html.includes('rel="canonical"')) {
        throw new Error(`Canonical missing: ${route}`);
      }

      if (!html.includes("G-1H2WHS7E70")) {
        throw new Error(`GA4 missing: ${route}`);
      }

      if (
        route.startsWith("/blog/") &&
        !html.includes('"BlogPosting"')
      ) {
        throw new Error(`BlogPosting schema missing: ${route}`);
      }

      generated.push({ filename, html, route });

      console.log(
        `[${generated.length}/${urls.length}] OK ${route} ` +
        `(${result.textLength} characters)`
      );

    } finally {
      await page.close();
    }
  }

  // Only modify files once all routes have passed.
  for (const item of generated) {
    fs.writeFileSync(item.filename, item.html);
  }

  console.log(
    `SUCCESS: Prerendered ${generated.length} HTML pages`
  );

} finally {
  await browser.close();
}
