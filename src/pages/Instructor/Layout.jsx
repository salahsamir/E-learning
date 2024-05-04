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
  Email,
} from "@mui/icons-material";
import CustomDrawer from "shared/ui/CustomDrawer/CustomDrawer.jsx";
import UploadContextProvider from "./shared/context/upload-context.tsx";
import BackgroundUpload from "./shared/Components/BackgroundUpload/BackgroundUpload";
import Error401 from "./Error/Error401.jsx";
import NotificationPopup from "features/Notifications/NotificationPopup.jsx";
import Footer from "Components/Footer/Footer.jsx";
const drawerItems = [
  { text: "Dashboard", icon: <Dashboard />, url: "/instructor" },
  { text: "Courses", icon: <VideoLibrary />, url: "courses" },
  { text: "Workshops", icon: <Groups />, url: "workshops" },
  // { text: "Analytics", icon: <Analytics />, url: "analytics" },
  { text: "Messages", icon: <Email />, url: "messages" },
  // { text: "Comments", icon: <Comment />, url: "comments" },
  { text: "Revenue", icon: <AttachMoney />, url: "revenue" },
  { text: "Settings", icon: <Settings />, url: "settings" },
];
function Layout() {
  const drawerRef = useRef(null);
  return (
    <>
      <NotificationPopup />
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
          sx={{
            width: "100%",
            maxWidth: "1400px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            minHeight: "100vh",
          }}
        >
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
          {!localStorage.getItem("token") && <Error401 />}
          {localStorage.getItem("token") && (
            <>
              <BackgroundUpload />
              <Box flex="1">
                <Outlet />
              </Box>
            </>
          )}
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default function LayoutWithContext() {
  return (
    <UploadContextProvider>
      <Layout />
    </UploadContextProvider>
  );
}
