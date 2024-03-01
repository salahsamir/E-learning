import { Box } from "@mui/material";
import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import NavbarCompact from "shared/ui/Navbar/Compact/NavbarCompact";
import {
  Analytics,
  AttachMoney,
  Comment,
  Dashboard,
  Groups,
  Settings,
  VideoLibrary,
} from "@mui/icons-material";
import CustomDrawer from "shared/ui/CustomDrawer/CustomDrawer.jsx";
import UploadContextProvider from "./shared/context/upload-context.tsx";
import BackgroundUpload from "./shared/Components/BackgroundUpload/BackgroundUpload";
const drawerItems = [
  { text: "Dashboard", icon: <Dashboard />, url: "/instructor" },
  { text: "Courses", icon: <VideoLibrary />, url: "courses" },
  { text: "Workshops", icon: <Groups />, url: "workshops" },
  { text: "Analytics", icon: <Analytics />, url: "analytics" },
  { text: "Comments", icon: <Comment />, url: "comments" },
  { text: "Revenue", icon: <AttachMoney />, url: "revenue" },
  { text: "Settings", icon: <Settings />, url: "settings" },
];
function Layout() {
  const drawerRef = useRef(null);
  return (
    <Box sx={{ pt: "0.5em" }}>
      <CustomDrawer ref={drawerRef} drawerItems={drawerItems} />
      <NavbarCompact
        onMenuClick={() => drawerRef.current?.toggleOpenDrawer()}
        visibleIcons={{
          wishlist: false,
          notification: true,
          cart: false,
          avatar: true,
          themeMode: true,
        }}
      />
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

export default function LayoutWithContext() {
  return (
    <UploadContextProvider>
      <Layout />
    </UploadContextProvider>
  );
}
