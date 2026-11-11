import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { createServer } from "vite";
import { PassThrough } from "node:stream";
import fs from "node:fs/promises";
import path from "node:path";

const BUILD = "/home/ubuntu/orpheus-seo-test-build";
const OUTPUT = "/home/ubuntu/orpheus-ssr-all-41";

const routes = Object.keys(
  JSON.parse(
    await fs.readFile(
      path.join(BUILD, "seo-metadata.json"),
      "utf8"
    )
  )
);

async function render(App, route) {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    const chunks = [];
    let renderingError = null;

    output.on("data", chunk => chunks.push(chunk));
    output.on("end", () => {
      if (renderingError) {
        reject(renderingError);
      } else {
        resolve(Buffer.concat(chunks).toString("utf8"));
      }
    });
    output.on("error", reject);

    const stream = renderToPipeableStream(
      React.createElement(App, {
        Router: StaticRouter,
        routerProps: { location: route },
      }),
      {
        onAllReady() {
          clearTimeout(watchdog);
          stream.pipe(output);
        },
        onError(error) {
          renderingError ??= error;
        },
      }
    );

    const watchdog = setTimeout(() => {
      stream.abort();
      reject(new Error("SSR timeout: " + route));
    }, 20000);
  });
}

const vite = await createServer({
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
  logLevel: "error",
});

try {
  const { default: App } =
    await vite.ssrLoadModule("/src/App.tsx");

  await fs.mkdir(OUTPUT, { recursive: true });
  await fs.cp(BUILD, OUTPUT, { recursive: true });

  for (const route of routes) {
    const htmlFile = path.join(
      OUTPUT,
      route === "/" ? "index.html" : route.slice(1) + ".html"
    );

    const template = await fs.readFile(
      htmlFile,
      "utf8"
    );

    const rendered = await render(App, route);

    if (!/<h1[\s>]/i.test(rendered)) {
      throw new Error("Missing H1: " + route);
    }

    const marker = '<div id="root"></div>';

    if (template.split(marker).length !== 2) {
      throw new Error("Invalid HTML template");
    }

    const result = template.replace(
      marker,
      `<div id="root" data-ssr="true">${rendered}</div>`
    );

    await fs.writeFile(htmlFile, result);

    console.log("PASS:", route);
    console.log("SSR HTML bytes:", Buffer.byteLength(rendered));
  }

  console.log("SSR HYDRATION PILOT GENERATED");
} finally {
  await vite.close();
}
