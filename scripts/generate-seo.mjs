import fs from "node:fs";
import path from "node:path";
import * as esbuild from "esbuild";

const BASE = "https://orpheusfinancial.co";
const outputDir = process.argv[2];

if (!outputDir || !fs.existsSync(path.join(outputDir, "index.html"))) {
  throw new Error("Valid build directory required");
}

const template = fs.readFileSync(
  path.join(outputDir, "index.html"),
  "utf8"
);

async function loadData(filename, exportName) {
  const result = await esbuild.build({
    entryPoints: [filename],
    bundle: true,
    platform: "node",
    format: "esm",
    write: false,
    logLevel: "silent",
  });

  const encoded = Buffer.from(
    result.outputFiles[0].text
  ).toString("base64");

  const mod = await import(
    "data:text/javascript;base64," + encoded
  );

  if (!Array.isArray(mod[exportName])) {
    throw new Error(`Invalid export: ${exportName}`);
  }

  return mod[exportName];
}

const [blogPosts, capabilityServices, jurisdictions] =
  await Promise.all([
    loadData("src/data/blogPosts.ts", "blogPosts"),
    loadData(
      "src/data/capabilityServices.ts",
      "capabilityServices"
    ),
    loadData(
      "src/data/siteArchitecture.ts",
      "jurisdictions"
    ),
  ]);

const serviceBuckets = await loadData(
  "src/data/siteArchitecture.ts",
  "serviceBuckets"
);

const staticPages = {
  "/": {
    title: "Orpheus Financial | Banking & Capital Advisory",
    description:
      "Dubai-based advisory for corporate structuring, banking, capital solutions and private wealth across global markets.",
  },
  "/about": {
    title: "About Orpheus Financial | Dubai Advisory",
    description:
      "Learn about Orpheus Financial and its approach to corporate structuring, banking, capital and private wealth advisory.",
  },
  "/services": {
    title: "Financial Advisory Services in Dubai | Orpheus Financial",
    description:
      "Explore corporate structuring, banking, capital advisory, treasury and private wealth solutions from Orpheus Financial in Dubai.",
  },
  "/contact": {
    title: "Contact Orpheus Financial | Dubai",
    description:
      "Contact Orpheus Financial to discuss corporate structuring, banking, capital solutions and private wealth advisory.",
  },
  "/blog": {
    title: "Financial Insights & Articles | Orpheus Financial",
    description:
      "Explore insights on UAE banking, corporate finance, business structuring, offshore jurisdictions and private wealth.",
  },
};

const pages = new Map(Object.entries(staticPages));

for (const post of blogPosts) {
  pages.set(`/blog/${post.slug}`, {
    title: `${post.title} | Orpheus Financial`,
    description: post.excerpt,
    type: "article",
  });
}

for (const service of capabilityServices) {
  pages.set(`/services/capability/${service.slug}`, {
    title: `${service.title} | Orpheus Financial`,
    description: service.summary || service.description,
  });
}

for (const jurisdiction of jurisdictions) {
  pages.set(`/jurisdictions/${jurisdiction.slug}`, {
    title: `${jurisdiction.title} Advisory | Orpheus Financial`,
    description: jurisdiction.description,
  });
}

for (const service of serviceBuckets) {
  pages.set(`/services/${service.slug}`, {
    title: `${service.title} | Orpheus Financial`,
    description: service.description,
  });
}

function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    ch => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[ch]
  );
}

function replaceExactlyOne(html, regex, replacement, label) {
  const matches = [...html.matchAll(
    new RegExp(regex.source, "gi")
  )];

  if (matches.length !== 1) {
    throw new Error(`${label}: expected 1, found ${matches.length}`);
  }

  return html.replace(regex, replacement);
}

function replaceMeta(html, attr, name, value) {
  let count = 0;

  const result = html.replace(/<meta\b[^>]*>/gi, tag => {
    if (!tag.includes(`${attr}="${name}"`)) {
      return tag;
    }

    count++;

    return `<meta ${attr}="${name}" content="${escapeHTML(value)}" />`;
  });

  if (count !== 1) {
    throw new Error(`${name}: expected 1 tag, found ${count}`);
  }

  return result;
}

const sitemap = fs.readFileSync(
  "public/sitemap.xml",
  "utf8"
);

const sitemapURLs = [
  ...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g),
].map(match => match[1].trim());

if (sitemapURLs.length !== new Set(sitemapURLs).size) {
  throw new Error("Duplicate URLs in sitemap");
}

if (sitemapURLs.length === 0) {
  throw new Error("Sitemap is empty");
}

for (const url of sitemapURLs) {
  const parsed = new URL(url);

  if (parsed.origin !== BASE || !pages.has(parsed.pathname)) {
    throw new Error(`Unknown sitemap URL: ${url}`);
  }
}

const allURLs = [...pages.keys()].map(
  route => BASE + route
);


function buildStructuredData(route) {
  const url = BASE + route;
  const page = pages.get(route);
  const nodes = [];

  const post = blogPosts.find(
    item => route === `/blog/${item.slug}`
  );

  const capability = capabilityServices.find(
    item => route === `/services/capability/${item.slug}`
  );

  const serviceBucket = serviceBuckets.find(
    item => route === `/services/${item.slug}`
  );

  if (post) {
    const article = {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "headline": post.title,
      "description": post.excerpt,
      "url": url,
      "author": {
        "@type": post.author.name === "Orpheus Financial"
          ? "Organization"
          : "Person",
        "name": post.author.name
      },
      "publisher": {
        "@type": "Organization",
        "name": "Orpheus Financial",
        "url": BASE + "/"
      }
    };

    const published = new Date(post.date);

    if (!Number.isNaN(published.getTime())) {
      article.datePublished =
        published.toISOString().slice(0, 10);
    }

    nodes.push(article);
  }

  const service = capability || serviceBucket;

  if (service) {
    nodes.push({
      "@type": "Service",
      "@id": `${url}#service`,
      "name": service.title,
      "serviceType": service.title,
      "description":
        service.description || service.summary,
      "url": url,
      "provider": {
        "@type": "Organization",
        "name": "Orpheus Financial",
        "url": BASE + "/"
      }
    });
  }

  if (route !== "/") {
    const items = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": BASE + "/"
      }
    ];

    let parentRoute = null;
    let parentName = null;

    if (route.startsWith("/blog/")) {
      parentRoute = "/blog";
      parentName = "Blog";
    } else if (route.startsWith("/services/")) {
      parentRoute = "/services";
      parentName = "Services";
    }

    if (parentRoute) {
      items.push({
        "@type": "ListItem",
        "position": items.length + 1,
        "name": parentName,
        "item": BASE + parentRoute
      });
    }

    items.push({
      "@type": "ListItem",
      "position": items.length + 1,
      "name": page.title.split(" | ")[0],
      "item": url
    });

    nodes.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      "itemListElement": items
    });
  }

  return nodes;
}

let generated = 0;

for (const url of allURLs) {
  const parsed = new URL(url);

  if (parsed.origin !== BASE || parsed.search || parsed.hash) {
    throw new Error(`Unexpected sitemap URL: ${url}`);
  }

  const route = parsed.pathname;
  const page = pages.get(route);

  if (!page) {
    throw new Error(`Missing SEO content for: ${route}`);
  }

  if (!page.title || !page.description) {
    throw new Error(`Missing title or description: ${route}`);
  }

  const canonical = BASE + route;

  let html = template;

  html = replaceExactlyOne(
    html,
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHTML(page.title)}</title>`,
    "title"
  );

  html = replaceExactlyOne(
    html,
    /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i,
    `<link rel="canonical" href="${canonical}" />`,
    "canonical"
  );

  for (const [attr, name, value] of [
    ["name", "description", page.description],
    ["property", "og:title", page.title],
    ["property", "og:description", page.description],
    ["property", "og:url", canonical],
    ["property", "og:type", page.type || "website"],
    ["name", "twitter:title", page.title],
    ["name", "twitter:description", page.description],
  ]) {
    html = replaceMeta(html, attr, name, value);
  }

  const schemaNodes = buildStructuredData(route);

  if (schemaNodes.length) {
    const schemaJSON = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": schemaNodes
    }).replace(/</g, "\\u003c");

    html = html.replace(
      "</head>",
      `  <script type="application/ld+json">${schemaJSON}</script>\n</head>`
    );
  }

  if (!html.includes("G-1H2WHS7E70")) {
    throw new Error("Google Analytics tag missing");
  }

  // Keep the root index.html from the Vite build.
  if (route === "/") {
    fs.writeFileSync(
      path.join(outputDir, "index.html"),
      html
    );
    continue;
  }

  // Generate route-specific HTML without modifying production.
  const destination = path.join(
    outputDir,
    route.slice(1) + ".html"
  );

  fs.mkdirSync(path.dirname(destination), {
    recursive: true,
  });

  fs.writeFileSync(destination, html);
  generated++;
}


const seoMetadata = Object.fromEntries(
  [...pages.entries()].map(([route, page]) => [
    route,
    {
      title: page.title,
      description: page.description,
      canonical: BASE + route,
      type: page.type || "website",
    },
  ])
);

fs.writeFileSync(
  path.join(outputDir, "seo-metadata.json"),
  JSON.stringify(seoMetadata, null, 2)
);

console.log(
  "Shared React metadata routes:",
  Object.keys(seoMetadata).length
);

console.log("SEO GENERATION COMPLETED");
console.log("Sitemap URLs:", sitemapURLs.length);
console.log("Route-specific HTML generated:", generated);
console.log("Homepage: existing index.html preserved");
console.log("Google Analytics: preserved");
