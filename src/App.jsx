import "./App.css";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { useSelector } from "react-redux";
import router from "./util/router";

function App() {
  const themeMode = useSelector((state) => state.ui.themeMode);
  return (
    <ThemeProvider theme={theme(themeMode)}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
