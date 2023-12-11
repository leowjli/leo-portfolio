import React from "react";
import NavBar from "./Navbar";
import Intro from "./EZPIntro";
import Focus from "./EZPFocus";
import Research from "./EZPResearch";
import Design from "./EZPDesign";
import Footer from "./Footer"
import { NavLink } from "react-router-dom";


  export default function EZPark() {
    return (
      <div className="root-layout">
        <header>
          <NavLink to="/">
            <img className="namelogo" src="/img/Name Logo.png" alt="Leo Li" />
          </NavLink>
          <NavBar />
        </header>
        <main className="ezpark-main">
          <Intro />
          <Focus />
          <Research />
          <Design />
          <Footer />
        </main>
      </div>
    );
  }