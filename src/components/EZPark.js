import React from "react";
import NavBar from "./Navbar";
import Intro from "./EzparkIntro";
import Focus from "./Focus";
import Research from "./Research";
import Design from "./Design";
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