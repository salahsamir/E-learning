import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Box pt={"60px"}>
        <Outlet />
      </Box>
    </>
  );
}
