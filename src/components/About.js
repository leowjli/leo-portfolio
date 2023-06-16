import React from "react";
import Header from "./Header";
import Socials from "./Socials";
import Intro from "./Introduction";
import Footer from "./Footer";
import Involvements from "./Involvements";

  export default function About() {
    return (
      <main>
        <Header />
        <hr />
        <section className="right"><span class="vl"></span></section>
        <Socials />
        <span className="vl" />
        <Intro />
        <Involvements />
        <Footer />
      </main>
    );
  }