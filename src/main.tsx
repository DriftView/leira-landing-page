import { StrictMode, type ComponentType } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/outfit";
import "./index.css";
import App from "./App.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import DeleteAccount from "./DeleteAccount.tsx";
import DataDeletion from "./DataDeletion.tsx";

// A handful of static pages, so a path lookup beats pulling in a router.
// Keep in sync with the rewrites in vercel.json and public/_redirects.
const PAGES: Record<string, ComponentType> = {
  "/privacy-policy": PrivacyPolicy,
  "/delete-account": DeleteAccount,
  "/data-deletion": DataDeletion,
};

const Page = PAGES[window.location.pathname.replace(/\/+$/, "")] ?? App;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
