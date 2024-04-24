import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { Box } from "@mui/material";
import Footer from "../../Components/Footer/Footer.jsx";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Box py={"40px"}>
        <Outlet />
      </Box>
      {/* <Footer /> */}
    </>
  );
}
