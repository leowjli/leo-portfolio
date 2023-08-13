import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import ResumeCard from "./ResumeCard";
import { NavLink } from "react-router-dom";

  export default function Resume() {
    return (
      <div className="root-layout">
        <header>
          <NavLink to="/">
            <img className="namelogo" src="/img/Name Logo.png" alt="Leo Li" />
          </NavLink>
          <NavBar />
        </header>
        <main>
          <ResumeCard />
        </main>
        <Footer />
      </div>
    );
  }