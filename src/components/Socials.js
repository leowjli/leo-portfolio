import React, { useState } from "react";
import { Link } from "react-router-dom";

  function SocialsCard(props) {
    return (
      <li className="socials-items"><Link to={props.address} className={props.name} target="_blank"><i className={props.icon} /></Link></li>
    );
  }

  export default function Socials(props) {
    const [displaySocials, setDisplaySocials] = useState(false);

    const handleClick = () => {
      setDisplaySocials(!displaySocials);
    }
    
    return (
      <div className={displaySocials ?"socials" : "socials expanded"}>
        <h3 className="cntlink" onClick={handleClick}><strong>{props.cntPrompt}</strong>!</h3>
        <div className="line" />
        <ul className="socials-list">
          <SocialsCard address={"mailto:leo.wj.li@gmail.com"} name={"gmail"} icon={"fa-regular fa-envelope"} />          <SocialsCard address={"https://www.linkedin.com/in/leoli07/"} name={"linkedin"} icon={"fa-brands fa-linkedin-in"} />
          <SocialsCard address={"https://www.instagram.com/leo.268/"} name={"instagram"} icon={"fa-brands fa-instagram"} />
        </ul>
      </div>
    );
  }