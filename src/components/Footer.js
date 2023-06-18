import React from "react";
import { Link } from "react-router-dom";

  export default function Footer() {
    return (
      <footer className="footer">
        <h3 className="connect">Get in touch
        <br />
        <strong>Let's grab some food and <Link className="cntlink" to="mailto:leo.wj.li@gmail.com">connect</Link>!</strong></h3>
        <hr />
        <h5 className="cr"><span>&copy;</span> 2023 Leo Li</h5>
      </footer>
    );
  }