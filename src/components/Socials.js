import React, { useState } from "react";
import { Link } from "react-router-dom";

  function SocialsCard(props) {
    return (
      <li className="socials-items"><Link to={props.address} className={props.name} target="_blank" /></li>
    );
  }

  export default function Socials() {
    const [openSocials, setOpenSocials] = useState(false);

    function toggleButton() {
      setOpenSocials(!openSocials);
    }

    return (
      <div className="socials">
        {/* <button className="share" onClick={toggleButton}><i className="fa-solid fa-share-nodes" /></button> */}
        <ul className="socials-list">
          <SocialsCard address={"mailto:leo.wj.li@gmail.com"} name={"gmail"} /><i className="fa-regular fa-envelope" />
          <SocialsCard address={"https://www.linkedin.com/in/leoli07/"} name={"linkedin"} /><i className="fa-brands fa-linkedin-in" />
          <SocialsCard address={"https://www.instagram.com/leo.268/"} name={"instagram"} /><i className="fa-brands fa-instagram" />
        </ul>
      </div>
    );
  }