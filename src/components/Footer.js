import React from "react";
import Contact from "./Contact";

  export default function Footer() {
    return (
      <footer className="footer">
        <h3 className="connect">Get in touch
        <br />
        <strong>Let's grab some food and <Contact className="cntlink" to={"mailto:leo.wj.li@gmail.com"} prompt={"connect"}/>!</strong></h3>
        <hr />
        <h5 className="cr"><span>&copy;</span> 2023 Leo Li</h5>
      </footer>
    );
  }