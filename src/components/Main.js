import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Socials from "./Socials";
import Banner from "./Banner";
import Portfolio from "./Portfolio";

  export default function Main() {
    return (
      <main>
        <Header />
        <hr />
        <section class="right"><span class="vl" /></section>
        <Socials />
        <Banner />
        <Portfolio />
        <Footer />
      </main>
    );
  }