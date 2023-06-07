import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Editor } from "./pages";
import { TimelineProvider } from "./context/TimelineContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TimelineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </TimelineProvider>
  </React.StrictMode>
);
