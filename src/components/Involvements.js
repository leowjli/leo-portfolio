import React from "react";
import InvolveCards from "./InvolveCards";

  export default function Involvements() {
    return (
      <section className="uw-involve">
        <div className="involvements">
          <h1>What I'm doing</h1>
          <h1 className="curly">&lcub;</h1>
          <InvolveCards />
        </div>
      </section>
    );
  }