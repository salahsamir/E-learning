import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { Box } from "@mui/material";
import TopBar from "../../Components/TopBar/TopBar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";


export default function Layout() {
  return (
    <>
      <Navbar />
      <Box py={"60px"}>
      <TopBar display={{ xs: "none", sm: "flex" }} />
        <Outlet />
      </Box>
     <Footer/>
    </>
  );
}
