
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { useSelector } from "react-redux";
import router from "./util/router";
import { Toaster } from "react-hot-toast";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const themeMode = useSelector((state) => state.ui.themeMode);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ThemeProvider theme={theme(themeMode)}>
      <CssBaseline />
      <Toaster/>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;



