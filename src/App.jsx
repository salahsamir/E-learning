import "./App.css";

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
function App() {
  const themeMode = useThemeContext().theme;
  useEffect(() => {
    AOS.init();
  }, []);
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
