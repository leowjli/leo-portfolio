import React from "react";
import Banner from "./Banner";
import EZParkCard from "./EZParkCard";
import MeyeCard from "./MeyeCard";
import GenZCard from "./GenZCard";
import SlangSphereCard from "./SlangSphereCard";
import BudgetBuddyCard from "./BudgetBuddyCard";

  export default function Portfolio() {
    return (
      <main>
        <Banner />
        <section className="work">
          <BudgetBuddyCard />
          <SlangSphereCard />
          <GenZCard />
          <EZParkCard />
          <MeyeCard />
        </section>
      </main>
    );
  }