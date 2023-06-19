import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Socials from "./Socials";
import Portfolio from "./Portfolio";

  export default function Home() {
    return (
      <div className="root-layout">
        <Header />
        <Socials />
        <Portfolio />
        <Footer />
      </div>
    );
  }