import React from "react";
import NavBar from "./Navbar";
import Intro from "./Introduction";
import Footer from "./Footer";
import Involvements from "./Involvements";

  export default function About() {
    return (
      <div className="root-layout">
        <NavBar />
        <main>
          <Intro />
          <Involvements />
        </main>
        <Footer />
      </div>
    );
  }