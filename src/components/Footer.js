import React from "react";
import { Link } from "react-router-dom";

  export default function Footer() {
    return (
      <footer className="footer">
        {/* <h3 className="connect">Get in touch</h3> */}
        <h3 className="connect">Let's grab some food and <Link className="cntlink" to="mailto:leo.wj.li@gmail.com"><strong>connect</strong></Link>!</h3>
        <p className="cr"><span>&copy;</span> 2023 Leo Li</p>
      </footer>
    );
  }