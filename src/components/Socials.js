import React from "react";
import { Link } from "react-router-dom";

  export default function Socials() {
    return (
      <section className="socials">
        <Link to="mailto:leo.wj.li@gmail.com" className="gmail" target="_blank" /><i className="fa-regular fa-envelope"></i>
        <Link to="https://www.linkedin.com/in/leoli07/" className="linkedin" target="_blank" /><i className="fa-brands fa-linkedin-in"></i>
        <Link to="https://www.instagram.com/leo.268/" className="instagram" target="_blank" /><i className="fa-brands fa-instagram"></i>
      </section>
    );
  }