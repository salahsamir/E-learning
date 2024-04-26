import React from "react";
import { Outlet} from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Nav from "../../Components/Nav/Nav.jsx";
export default function Layout() {

  return (
    <>
      {/* <Navbar /> */}
      <Nav/>
      <div >
        <Outlet />
      </div>
    </>
  );
}
