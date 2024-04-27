import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "../../Components/Nav/Nav.jsx";
export default function Layout() {
  return (
    <>
      <Nav/>
      <div >
        <Outlet />
      </div>
    </>
  );
}



