import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from 'react';

  export default function NavBar() {
    const [open, setOpen] = useState(false);

    function toggleMenu() {
      setOpen(!open);
    };
    
    return (
      <nav className="navbar">
        <NavLink className="name" to="/">
          <img className="namelogo" src="/img/Name Logo.png" alt="Leo Li" />
        </NavLink>
        <button className="dropdown-btn" onClick={toggleMenu} aria-label="hamburger-menu">
          <i className={open ? 'fas fa-times' : 'fas fa-bars'}/>
        </button>
        <div className="menu" hidden={!open}>
          <ul>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Resume'>Résumé</NavLink>
          </ul>
        </div>
      </nav>
    );
  }