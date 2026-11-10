import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoEntry = {
  title: string;
  description: string;
  canonical: string;
  type: string;
};

type SeoManifest = Record<string, SeoEntry>;

let metadataPromise: Promise<SeoManifest> | null = null;

function loadMetadata(): Promise<SeoManifest> {
  if (!metadataPromise) {
    metadataPromise = fetch("/seo-metadata.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `SEO metadata HTTP ${response.status}`
          );
        }

        return response.json() as Promise<SeoManifest>;
      })
      .catch((error) => {
        metadataPromise = null;
        throw error;
      });
  }

  return metadataPromise;
}

function setMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let element = Array.from(
    document.querySelectorAll<HTMLMetaElement>("meta")
  ).find(
    (meta) => meta.getAttribute(attribute) === key
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function applyMetadata(data: SeoEntry) {
  document
    .querySelector('meta[name="robots"]')
    ?.remove();

  document.title = data.title;

  setMeta("name", "description", data.description);

  setMeta("property", "og:title", data.title);
  setMeta(
    "property",
    "og:description",
    data.description
  );
  setMeta("property", "og:url", data.canonical);
  setMeta("property", "og:type", data.type);

  setMeta("name", "twitter:title", data.title);
  setMeta(
    "name",
    "twitter:description",
    data.description
  );

  let canonical = document.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = data.canonical;
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    let cancelled = false;

    const normalizedPath =
      pathname === "/"
        ? "/"
        : pathname.replace(/\/+$/, "");

    loadMetadata()
      .then((manifest) => {
        if (cancelled) return;

        const page = manifest[normalizedPath];

        if (page) {
          applyMetadata(page);
        } else {
          document.title = "Page Not Found | Orpheus Financial";

          setMeta(
            "name",
            "description",
            "The requested page could not be found."
          );

          setMeta("name", "robots", "noindex, follow");

          const canonical = document.querySelector(
            'link[rel="canonical"]'
          );

          canonical?.remove();
        }
      })
      .catch((error) => {
        console.error(
          "Unable to load SEO metadata:",
          error
        );
      });

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
