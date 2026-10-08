import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ScreenPreview } from "./screens/ScreenPreview";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScreenPreview />
  </StrictMode>,
);
