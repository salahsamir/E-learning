import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'

export default function Layout() {
  return (
  <>
 <Navbar/>
  
<div className="container my-3">
<Outlet/>
</div>
  
  </>
  )
}
