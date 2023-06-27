import React from "react";

  function Team(props) {
    return (
      <div>
        <p><b>{props.title}</b></p>
        <p>{props.info}</p>
      </div>
    );
  }

  export default function Intro() {
    return (
      <section className="ezpark-intro">
        <h1>EZ PARK</h1>
        <p>Mobile App Design</p>
        <p className="statement">
          We aim to serve UW and matriculated UW students who commute to campus daily, or keep their vehicles on campus, and make it easier for these students to find free and/or affordable parking located around their classrooms. Students should not have to worry about paying an excessive amount for parking.
        </p>
        <section className="team">
          <Team title={"Team:"} info={"4 people"} />
          <Team title={"My Role:"} info={"UI Design + User Research"} />
          <Team title={"Tools:"} info={"Figma, Google Docs, Moodboard"} />
          <Team title={"Duration:"} info={"4-5 weeks"} />
        </section>
      </section>
    );
  }