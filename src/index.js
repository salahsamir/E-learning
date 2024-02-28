import React from "react";
import ReactDOM from "react-dom/client";
import "video-react/dist/video-react.css";
import { Provider } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import store from "./store/index";
import { ThemeContextProvider } from "./Context/theme-context.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Provider>
);
