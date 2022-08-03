import React from 'react'
import "./header.css"

function Header() {
  return (
    <>
    <div className="new-head">
        <h3 className="new-title"></h3>
    </div>
    <div className="headerContainer">
      <h3 className="title">Timeless Tales</h3>
      <img src="https://images.unsplash.com/photo-1552660341-7082b02abb1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80" alt="Sunset Image" width="100%" height="900px"/>
    </div>
    </>
  )
}

export default Header;