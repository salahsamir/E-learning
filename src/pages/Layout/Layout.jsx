import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { Box } from "@mui/material";
import TopBar from "../../Components/TopBar/TopBar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

export default function Layout() {
  const location = useLocation();

  // Define the paths of the signin and signup routes
  const signinRoute = "/signin";
  const signupRoute = "/signup";

  // Check if the current location matches the signin or signup routes
  const isAuthRoute = location.pathname === signinRoute || location.pathname === signupRoute;

  return (
    <>
      <Navbar />
      <Box py={"40px"}>
        {/* Conditionally render TopBar based on the route */}
        {!isAuthRoute && <TopBar display={{ xs: "none", sm: "flex" }} />}
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
