import React from "react";
import Header from "./Header";
import Socials from "./Socials";
import Intro from "./EzparkIntro";
import Focus from "./Focus";
import Research from "./Research";
import Design from "./Design";


  export default function EZPark() {
    return (
      <div className="root-layout">
        <Header />
        <Socials />
        <Intro />
        <Focus />
        <Research />
        <Design />
      </div>
    );
  }