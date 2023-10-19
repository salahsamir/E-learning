import React from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
  <nav className={`${style.navbar} navbar navbar-expand-sm navbar-light  mb-5 `}>
  <div className="container ">
    <Link className="navbar-brand " to={'/home'}>Knowladge</Link>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav m-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link " to={'home'} aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Link</Link>
        </li>
     
      </ul>
      <ul className="navbar-nav m mt-2 mt-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to={'/login'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/registar'}>Registar</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" >Logout</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

    
    </>
  )
}
