import React from "react";
import NavBar from "./Navbar";
import Intro from "./EZPark/EZPIntro";
import Focus from "./EZPark/EZPFocus";
import Research from "./EZPark/EZPResearch";
import Design from "./EZPark/EZPDesign";
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