import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { Box } from "@mui/material";
import TopBar from "../../Components/TopBar/TopBar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

export default function Layout() {
  const location = useLocation();

  // Define the paths of the signin, signup, and sendEmail routes
  const authRoutes = ["/signin", "/signup", "/sendEmail",'/sendCode','/updatePassword'];

  // Check if the current location matches any of the auth routes
  const isAuthRoute = authRoutes.includes(location.pathname);

  // Check if the current location includes a redirect query parameter
  const hasRedirectQuery = location.search.includes("?redirect=");

  return (
    <>
      <Navbar />
      <Box py={"40px"}>
        {/* Conditionally render TopBar based on the route */}
        {/* {!isAuthRoute && !hasRedirectQuery && <TopBar display={{ xs: "none", sm: "flex" }} />} */}
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
