import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { BioProvider } from "./components/Index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BioProvider>
        <App />
      </BioProvider>
    </BrowserRouter>
  </StrictMode>
);
