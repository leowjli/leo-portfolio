import React from "react";

  function Team(props) {
    return (
      <div>
        <p><b>{props.title}</b></p>
        <p>{props.info}</p>
      </div>
    );
  }

  export default function SSIntroIntro() {
    return (
      <section className="ss-intro">
        <h1>SlangSphere</h1>
        <p>Mobile App Design</p>
        <p className="statement">
          SlangSphere is a slang-learning mobile app designed for international students to better engage in informal conversations with English speakers. We wanted students with different language backgrounds to make lasting personal connections, and making conversations between students more memorable by helping international students understand everyday English slang.
        </p>
        <section className="team">
          <Team title={"Team:"} info={"4 people"} />
          <Team title={"My Role:"} info={"UI Design + User Research"} />
          <Team title={"Tools:"} info={"Figma, Google Docs"} />
          <Team title={"Duration:"} info={"8 weeks"} />
        </section>
      </section>
    );
  }