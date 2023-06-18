import React from "react";
import Banner from "./Banner";
import EZParkCard from "./EZParkCard";
import MeyeCard from "./MeyeCard";

  export default function Portfolio() {
    return (
      <div>
        <Banner />
        <div className="work">
          <EZParkCard />
          <MeyeCard />
        </div>
      </div>
    );
  }