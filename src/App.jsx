import "./App.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import router from "./util/router";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AllProvider } from "./Context/Context.jsx";
import { useThemeContext } from "Context/theme-context.tsx";
import axios from "axios";
import { BaseApi } from "util/BaseApi";
import { useCheckNotifications } from "api/socket/notifications.tsx";

function App() {
  useCheckNotifications();
  const themeMode = useThemeContext().theme;
  useEffect(() => {
    AOS.init();
  }, []);
  axios.defaults.baseURL = BaseApi;
  axios.defaults.headers.common["token"] = localStorage.getItem("token");
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["cookieId"] = getCookie("cookieId");
  return (
    <ThemeProvider theme={theme(themeMode)}>
      <CssBaseline />
      <Toaster />
      <AllProvider>
        <RouterProvider router={router} />
      </AllProvider>
    </ThemeProvider>
  );
}

export default App;

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
