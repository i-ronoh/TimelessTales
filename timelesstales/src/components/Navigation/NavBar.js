import React from 'react'
import "./navbar.css"

function NavBar() {
  return (
    <div className="navbar">
      <div className = "navbar-item-left">
        <ul className="nav-menu">
          <li className="nav-menu-item">HOME</li>
          <li className="nav-menu-item">ARTICLES</li>
          <li className="nav-menu-item">CREATE</li>
        </ul>
      </div>
      <div className = "navbar-item-center">
        <input type="text" className="nav-search" placeholder="Search"></input>
      </div>
      <div className = "navbar-item-right">
        {/* <img className="nav-dp" src="" alt="profile"/> */}
        <i className="nav-dp fa-solid fa-user"></i>
        <h5 className="nav-log">LOGIN</h5>
      </div>
    </div>
  )
}
 export default NavBar;
