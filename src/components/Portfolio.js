import React from "react";
import Banner from "./Banner";
import EZParkCard from "./EZParkCard";
import MeyeCard from "./MeyeCard";
import GenZCard from "./GenZCard";

  export default function Portfolio() {
    return (
      <main>
        <Banner />
        <div className="work">
          <EZParkCard />
          <MeyeCard />
          <GenZCard />
        </div>
      </main>
    );
  }