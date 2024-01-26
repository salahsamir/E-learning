import { Box } from "@mui/material";
import React, { useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import CustomDrawer from "./Components/CustomDrawer/CustomDrawer";
import { Outlet } from "react-router-dom";
import UploadContextProvider from "./context/upload-context";
import BackgroundUpload from "./Components/BackgroundUpload/BackgroundUpload";

function Layout() {
  const drawerRef = useRef(null);
  return (
    <Box sx={{ pt: "0.5em" }}>
      <CustomDrawer ref={drawerRef} />
      <Navbar onMenuClick={() => drawerRef.current?.toggleOpenDrawer()} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          pt: "calc(60px + 1em)",
          mr: "1em",
          ml: {
            xs: "1em",
            md: "calc(65px + 1em)",
            lg: "calc(240px + 1em)",
          },
        }}
      >
        <Box width="100%" maxWidth="1400px" position="relative">
          <BackgroundUpload />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default () => (
  <UploadContextProvider>
    <Layout />
  </UploadContextProvider>
);
