import React from "react";
import Banner from "./Banner";
import EZParkCard from "./EZParkCard";
import MeyeCard from "./MeyeCard";
import GenZCard from "./GenZCard";
import SlangSphereCard from "./SlangSphereCard";

  export default function Portfolio() {
    return (
      <main>
        <Banner />
        <section className="work">
          <SlangSphereCard />
          <GenZCard />
          <EZParkCard />
          <MeyeCard />
        </section>
      </main>
    );
  }