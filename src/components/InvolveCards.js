import React from "react";
import { Link } from "react-router-dom";

  function Cards(props) {
    return (
      <div>
        <h3>
          {props.position}
          <Link to={props.link} target="_blank" className={props.org} >
            <strong>{props.orgName}</strong>
          </Link>
        </h3>
      </div>
    );
  }

  export default function InvolveCards() {
    return (
      <div className="activities">
        <Cards position={"Computer Vet at "} link={"https://itconnect.uw.edu/help/the-computer-vet/"} orgName={"UW Academic Technologies"} />
        <Cards position={"UX Design + Web Development for "} link={"https://myearthyourearth.webflow.io/"} orgName={"My Earth Your Earth"} />
        <Cards position={"Officer and Performance Director at "} link={"https://www.csauw.com/"} org={"csa"} orgName={"Chinese Student Assoication"} />
        <Cards position={"Cymbals Player for the Husky Drumline and "} link={"https://www.huskymarchingband.org/"} org={"hmb"} orgName={"Husky Marching Band"} />
      </div>
    );
 }