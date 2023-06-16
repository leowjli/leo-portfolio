import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Socials from "./Socials";
import Portfolio from "./Portfolio";

  export default function Main() {
    return (
      <main>
        <Header />
        <hr />
        <section class="right"><span class="vl" /></section>
        <Socials />
        <span className="vl" />
        <Portfolio />
        <Footer />
      </main>
    );
  }