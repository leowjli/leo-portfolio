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
        <NavLink to="/">
          <img className="namelogo" src="/img/Name Logo.png" alt="Leo Li" />
        </NavLink>
        <button className="dropdown-btn" onClick={toggleMenu} aria-label="hamburger-menu">
          <i className={open ? 'fas fa-times' : 'fas fa-bars'}/>
        </button>
        <div className={open ? "menu expanded" : "menu"}>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/Resume'>Résumé</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }