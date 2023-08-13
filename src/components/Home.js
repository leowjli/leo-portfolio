import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import { NavLink } from "react-router-dom";

  export default function Home() {
    return (
      <div className="root-layout">
        <header>
          <NavLink to="/">
            <img className="namelogo" src="/img/Name Logo.png" alt="Leo Li" />
          </NavLink>
          <NavBar />
        </header>
        <Portfolio />
        <Footer />
      </div>
    );
  }