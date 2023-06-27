import React from "react";
import NavBar from "./Navbar";
import Intro from "./EzparkIntro";
import Focus from "./Focus";
import Research from "./Research";
import Design from "./Design";
import Footer from "./Footer"


  export default function EZPark() {
    return (
      <div className="root-layout">
        <main className="ezpark-main">
          <NavBar />
          <Intro />
          <Focus />
          <Research />
          <Design />
          <Footer />
        </main>
      </div>
    );
  }