import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Socials from "./Socials";
import Portfolio from "./Portfolio";

  export default function Home() {
    return (
      <main>
        <Header />
        <hr />
        <section className="right"><span className="vl" /></section>
        <Socials />
        <span className="vl" />
        <Portfolio />
        <Footer />
      </main>
    );
  }