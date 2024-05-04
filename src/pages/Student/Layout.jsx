import { Box } from "@mui/material";
import React, { useRef } from "react";
import CustomDrawer from "shared/ui/CustomDrawer/CustomDrawer";
import { Outlet } from "react-router-dom";
import { NavbarCompact } from "shared/ui/Navbar";
import {
  CreditCard,
  Dashboard,
  Email,
  Groups,
  Settings,
  VideoLibrary,
} from "@mui/icons-material";
import Footer from "Components/Footer/Footer";
const drawerItems = [
  { text: "Dashboard", icon: <Dashboard />, url: "/student" },
  { text: "Courses", icon: <VideoLibrary />, url: "courses" },
  { text: "Workshops", icon: <Groups />, url: "workshops" },
  { text: "Messages", icon: <Email />, url: "messages" },
  { text: "Billing", icon: <CreditCard />, url: "billing" },
  { text: "Settings", icon: <Settings />, url: "settings" },
];
export default function Layout() {
  const drawerRef = useRef(null);
  return (
    <>
      <CustomDrawer ref={drawerRef} drawerItems={drawerItems} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          mr: "1em",
          ml: {
            xs: "1em",
            md: "calc(65px + 1em)",
            lg: "calc(240px + 1em)",
          },
        }}
      >
        <Box
          width="100%"
          maxWidth="1400px"
          position="relative"
          display="flex"
          flexDirection="column"
          gap="16px"
          minHeight="100vh"
        >
          <NavbarCompact
            onMenuClick={() => drawerRef.current?.toggleOpenDrawer()}
            visibleIcons={{
              wishlist: true,
              notification: true,
              cart: true,
              avatar: true,
              themeMode: true,
            }}
          />
          <Box flex="1">
            <Outlet />
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
