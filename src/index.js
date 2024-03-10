import React from "react";
import ReactDOM from "react-dom/client";
import "video-react/dist/video-react.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { ThemeContextProvider } from "./Context/theme-context.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 5 * 60 * 1000, // 5 minutes
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </QueryClientProvider>
);
