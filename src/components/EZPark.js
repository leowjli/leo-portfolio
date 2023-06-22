import React from "react";
import NavBar from "./Navbar";
import Socials from "./Socials";
import Intro from "./EzparkIntro";
import Focus from "./Focus";
import Research from "./Research";
import Design from "./Design";


  export default function EZPark() {
    return (
      <div className="root-layout">
        <NavBar />
        <Socials />
        <Intro />
        <Focus />
        <Research />
        <Design />
      </div>
    );
  }