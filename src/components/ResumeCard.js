import React from "react";
import { Link } from "react-router-dom";

  export default function ResumeCard() {
    return (
      <section className="resume" >
        <img className="resumepic" src="/img/Resume.png" alt="Leo's resume" />
        <button>
          <Link to="/img/Career Resume.pdf" download="Leo Li's Resume" target="_blank">Download PDF</Link>
        </button>
		  </section>
    );
  }