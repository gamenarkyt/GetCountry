import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import { MainPage } from "./pages/MainPage/MainPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
