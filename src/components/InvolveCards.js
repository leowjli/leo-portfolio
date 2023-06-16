import React from "react";
import { Link } from "react-router-dom";

  function Cards(props) {
    return (
      <h5>
        {props.position}
        <Link to={props.link} className={props.org} target="_blank">
          <strong>{props.orgName}</strong>
        </Link>
      </h5>
    );
  }

  export default function InvolveCards() {
    return (
      <div className="activities">
        <section>
          <Cards position={"UX Design and Web Management for "} link={"https://myearthyourearth.com/"} org={"meye"} orgName={"My Earth Your Earth"} />
        </section>
        <section>
          <Cards position={"Officer and Performance Director at "} link={"https://www.csauw.com/"} org={"csa"} orgName={"Chinese Student Assoication"} />
        </section>
        <section>
          <Cards position={"Hacker at "} link={"https://dh22.dubhacks.co/"} org={"dh"} orgName={"DubHacks Hackathon"} />
        </section>
        <section>
          <Cards position={"Cymbals Player for the Husky Drumline and "} link={"https://www.huskymarchingband.org/"} org={"hmb"} orgName={"Husky Marching Band"} />
        </section>
      </div>
    );
 }