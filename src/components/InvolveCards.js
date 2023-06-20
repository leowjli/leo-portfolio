import React from "react";
import { Link } from "react-router-dom";

  function Cards(props) {
    return (
      <div>
        <h5>
          {props.position}
          <Link to={props.link} target="_blank" className={props.org} >
            <strong>{props.orgName}</strong>
          </Link>
        </h5>
      </div>
    );
  }

  export default function InvolveCards() {
    return (
      <div className="activities">
        <Cards position={"UX Design and Web Development for "} link={"https://myearthyourearth.com/"} orgName={"My Earth Your Earth"} />
        <Cards position={"Officer and Performance Director at "} link={"https://www.csauw.com/"} org={"csa"} orgName={"Chinese Student Assoication"} />
        <Cards position={"Hacker at "} link={"https://dh22.dubhacks.co/"} org={"dh"} orgName={"DubHacks Hackathon"} />
        <Cards position={"Cymbals Player for the Husky Drumline and "} link={"https://www.huskymarchingband.org/"} org={"hmb"} orgName={"Husky Marching Band"} />
      </div>
    );
 }