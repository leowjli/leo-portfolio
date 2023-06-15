import React from "react";
import Contact from "./Contact";

  export default function Socials() {
    return (
      <section className="socials">
        <div>
          <Contact contact={"mailto:leo.wj.li@gmail.com"} className="gmail" target="_blank" /><i className="fa-regular fa-envelope"></i>
          <Contact contact={"https://www.linkedin.com/in/leoli07/"} className="linkedin" target="_blank" /><i className="fa-brands fa-linkedin-in"></i>
          <Contact contact={"https://www.instagram.com/leo.268/"} className="instagram" target="_blank" /><i className="fa-brands fa-instagram"></i>
          <span className="vl" />
        </div>
      </section>
    );
  }