import React from "react";
import { NavLink } from "react-router-dom";

  export default function NavBar() {
    return (
      <nav className="navbar">
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/About'>About</NavLink>
          <NavLink to='/Resume'>Résumé</NavLink>
        </ul>
      </nav>
    );
  }