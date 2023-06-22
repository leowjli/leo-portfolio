import React from "react";

  export default function Intro() {
    return (
      <div>
        <div className="intro">
          <h1>EZ PARK</h1>
          <p>Mobile App Design</p>
          <p className="statement">
            We aim to serve UW and matriculated UW students who commute to campus everyday, or keep their vehicles/ bikes on campus, and make it easier for these students to find free and/or affordable parking located around their classrooms. Students should not have to worry about paying an excessive amount for parking.
          </p>
        </div>
        <section className="team">
          <div>
            <p><b>Team:</b></p>
            <p>4 people</p>
          </div>
          <div>
            <p><b>My Role:</b></p>
            <p>UI Design + User Research</p>
          </div>
          <div>
            <p><b>Tools:</b></p>
            <p>Figma, Google Docs, Moodboard</p>
          </div>
          <div>
            <p><b>Duration:</b></p>
            <p>4-5 weeks</p>
          </div>
        </section>
      </div>
    );
  }