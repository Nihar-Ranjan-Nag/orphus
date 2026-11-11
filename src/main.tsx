import {
  createRoot,
  hydrateRoot,
} from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element with id "root" was not found.'
  );
}

if (rootElement.dataset.ssr === "true") {
  hydrateRoot(rootElement, <App />, {
    onRecoverableError(error) {
      console.error("React hydration warning:", error);
    },
  });
} else {
  createRoot(rootElement).render(<App />);
}
