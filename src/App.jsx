
import "./App.css";
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { useSelector } from "react-redux";
import router from "./util/router";
import { Toaster } from "react-hot-toast";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AllProvider } from "./Context/Context.jsx";


function App() {
  const themeMode = useSelector((state) => state.ui.themeMode);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ThemeProvider theme={theme(themeMode)}>
      <CssBaseline />
      <Toaster/>
      <AllProvider><RouterProvider router={router} /></AllProvider>
    </ThemeProvider>
  );
}


export default App;



