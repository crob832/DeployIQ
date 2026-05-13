import React from "react";
import { createRoot } from "react-dom/client";
import DeployIQLandingPage from "../auckland_ai_company_landing_page.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DeployIQLandingPage />
  </React.StrictMode>,
);
