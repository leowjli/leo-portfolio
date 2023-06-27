import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import ResumeCard from "./ResumeCard";

  export default function Resume() {
    return (
      <div className="root-layout">
        <NavBar />
        <main>
          <ResumeCard />
        </main>
        <Footer />
      </div>
    );
  }