import React from "react";
import Header from "./Header";
import Socials from "./Socials";
import Footer from "./Footer";
import ResumeCard from "./ResumeCard";

  export default function Resume() {
    return (
      <main>
        <Header />
        <hr />
        <Socials />
        <ResumeCard />
        <Footer />
      </main>
    );
  }