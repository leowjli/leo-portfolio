import React from "react";
import Contact from "./Contact";

  export default function Footer() {
    return (
      <footer class="footer">
        <h3 className="connect">Get in touch
        <br />
        <strong>Let's grab some food and <Contact className="cntlink" contact={"mailto:leo.wj.li@gmail.com"}>connect</Contact>!</strong></h3>
        <hr />
        <h5 className="cr"><span>&copy;</span> 2023 Leo Li</h5>
      </footer>
    );
  }