import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Nav from "../../Components/Nav/Nav.jsx";
export default function Layout() {
<<<<<<< HEAD

=======
>>>>>>> 13437001e7879e3afdce4289147a6b228a89999f
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
