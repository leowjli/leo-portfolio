import React from "react";
import Banner from "./Banner";
import EZParkCard from "./EZParkCard";
import MeyeCard from "./MeyeCard";

  export default function Portfolio() {
    return (
      <div>
        <Banner />
        <article className="work">
          <EZParkCard />
          <MeyeCard />
        </article>
      </div>
    );
  }