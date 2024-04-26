import React from "react";
import { Outlet} from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
<<<<<<< HEAD
import Nav from "../../Components/Nav/Nav.jsx";
export default function Layout() {

  return (
    <>
      {/* <Navbar /> */}
      <Nav/>
      <div >
        <Outlet />
      </div>
=======
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
>>>>>>> 9f6edc7748097ca6798d5703e8178498a7fe8757
    </>
  );
}
