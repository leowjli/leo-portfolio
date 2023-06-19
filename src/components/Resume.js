import React from "react";
import Header from "./Header";
import Socials from "./Socials";
import Footer from "./Footer";
import ResumeCard from "./ResumeCard";

  export default function Resume() {
    return (
      <div className="root-layout">
        <Header />
        <Socials />
        <main>
          <ResumeCard />
        </main>
        <Footer />
      </div>
    );
  }