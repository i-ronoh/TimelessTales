import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className = "navbar-item-left">
        <ul className="nav-menu">
          <li className="nav-menu-item" >
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="nav-menu-item" >
            <Link className="link"  to="/blogs">BLOG POSTS</Link> 
          </li>
          <li className="nav-menu-item">
            <Link className="link" to="/createNew">NEW POST</Link>
          </li>
        </ul>
      </div>
      {/* <div className = "navbar-item-center">
        <i className="nav-dp fa-solid fa-user"></i>
        <input type="text" className="nav-search" placeholder="Search"></input>
      </div> */}
      <div className = "navbar-item-right">
       <ul className="nav-menu">
        <li className="nav-menu-item">
            <Link className="link" to="/login"></Link>
          </li>
          <li className="nav-menu-item">
            <Link className="link"  to="/register"></Link>
          </li>
       </ul>
      </div>
    </div>
  )
}
 export default NavBar;
