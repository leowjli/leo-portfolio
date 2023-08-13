import React from "react";
import NavBar from "./Navbar";
import Intro from "./Introduction";
import Footer from "./Footer";
import Involvements from "./Involvements";
import { NavLink } from "react-router-dom";

  export default function About() {
    return (
      <div className="root-layout">
        <header>
          <NavLink to="/">
            <img className="namelogo" src="/img/Name Logo.png" alt="Leo Li" />
          </NavLink>
          <NavBar />
        </header>
        <main>
          <Intro />
          <Involvements />
        </main>
        <Footer />
      </div>
    );
  }