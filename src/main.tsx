import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>
);
