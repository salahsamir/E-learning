import "./App.css";
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
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
function App() {
  const themeMode = useThemeContext().theme;
  useEffect(() => {
    AOS.init();
  }, []);
  axios.defaults.baseURL = BaseApi;
  axios.defaults.headers.common["token"] = localStorage.getItem("token");
  axios.defaults.headers.common["Content-Type"] = "application/json";

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
