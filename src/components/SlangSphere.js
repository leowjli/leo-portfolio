import React from "react";
import NavBar from "./Navbar";
import SSIntro from "./SSIntro";
import SSFocus from "./SSFocus";
import SSResearch from "./SSResearch";
import SSDesign from "./SSDesign";
import Footer from "./Footer"
import { NavLink } from "react-router-dom";


export default function SlangSphere() {
  return (
    <div className="root-layout">
      <header>
        <NavLink to="/">
          <img className="namelogo" src="/img/Name Logo.png" alt="Leo Li" />
        </NavLink>
        <NavBar />
      </header>
      <main className="ss-main">
        <SSIntro />
        <SSFocus />
        <SSResearch />
        <SSDesign />
        <Footer />
      </main>
    </div>
  );
}