import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import { App } from "./App";

import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
        <Toaster />
    </StrictMode>
);

// Remove Preload scripts loading
postMessage({ payload: "removeLoading" }, "*");
