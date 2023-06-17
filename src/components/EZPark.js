import React from "react";
import Header from "./Header";
import Socials from "./Socials";

  export default function EZPark() {
    return (
      <main>
        <Header />
        <hr />
        <section className="right"><span className="vl"></span></section>
        <Socials />
        <span className="vl" />
      </main>
    );
  }