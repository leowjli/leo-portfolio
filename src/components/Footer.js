import React from "react";
import Socials from "./Socials";

  export default function Footer() {
    return (
      <footer className="footer">
        <div className="connect">
          <h3>Let&apos;s grab some food and</h3><Socials cntPrompt={"connect"} />
        </div>
        <p className="cr"><span>&copy;</span> 2024 Leo Li</p>
      </footer>
    );
  }