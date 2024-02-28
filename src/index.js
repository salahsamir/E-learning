import React from "react";
import ReactDOM from "react-dom/client";
import "video-react/dist/video-react.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ThemeContextProvider } from "./Context/theme-context.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
