import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Portfolio from "./Portfolio";

  export default function Home() {
    return (
      <div className="root-layout">
        <NavBar />
        <Portfolio />
        <Footer />
      </div>
    );
  }