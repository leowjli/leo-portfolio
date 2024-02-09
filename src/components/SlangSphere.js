import React from "react";
import NavBar from "./Navbar";
import SSIntro from "./SlangSphere/SSIntro";
import SSFocus from "./SlangSphere/SSFocus";
import SSResearch from "./SlangSphere/SSResearch";
import SSDesign from "./SlangSphere/SSDesign";
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