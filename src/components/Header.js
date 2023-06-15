import React from "react";
import NavBar from "./Navbar";
import { NavLink } from "react-router-dom";

  export default function Header() {
    return (
      <header className="header">
        <NavLink className="name" to="/">
          <img className="namelogo" src="./resources/images/Name Logo.png" alt="Leo Li" />
        </NavLink>
        {/* <!-- navigation bar --> */}
        <NavBar />
      </header>
    );
  }