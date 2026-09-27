import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");
if (!root) throw new Error("Root element is missing");

const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
