import React from "react";
import { Link } from "react-router-dom";

  export default function ResumeCard() {
    return (
      <section className="resume" >
        <div className="previews">
          <button>
            <Link to="/img/Resume.pdf" target="_blank">Download PDF</Link>
          </button>
          <button>
            <Link to="/img/Career Resume.pdf" target="_blank">ATS Friendly</Link>
          </button>
        </div>
        <img className="resumepic" src="/img/Resume.png" alt="Leo's resume" />
		  </section>
    );
  }