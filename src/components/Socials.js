import React from "react";
import { Link } from "react-router-dom";

  function SocialsCard(props) {
    return (
      <Link to={props.address} className={props.name} target="_blank" />
    );
  }

  export default function Socials() {
    return (
      <section className="socials">
        <SocialsCard address={"mailto:leo.wj.li@gmail.com"} name={"gmail"} /><i className="fa-regular fa-envelope" />
        <SocialsCard address={"https://www.linkedin.com/in/leoli07/"} name={"linkedin"} /><i className="fa-brands fa-linkedin-in" />
        <SocialsCard address={"https://www.instagram.com/leo.268/"} name={"instagram"} /><i className="fa-brands fa-instagram" />
      </section>
    );
  }