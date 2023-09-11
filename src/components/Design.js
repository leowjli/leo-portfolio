import React from "react";

  export function SectionCard(props) {
    return(
      <div>
        <h1>{props.title}</h1>
        <p>{props.context}</p>
      </div>
    );
  }

  export default function Design() {
    return (
      <article>
        <section className="sitemap">
          <SectionCard title={"Site Map"} context={"We mapped out the important product features that can best benefit the users in our site map. This helped us structure and design each of the pages the users will encounter and increased the overall smoothness and functionality of the app."} />
          <img src="/img/EZPark Site Map.png" alt="ez park site map" />
        </section>
        <section className="lofi">
          <SectionCard title={"Low Fidelity"} context={"Our Lo-fi was created as we inputted our research into design and structure. We wanted to make sure the user feels at ease with the information flow so we went for simplicity."} />
          <img src="/img/lo-fi/Lo-Fi.png" alt="lo-fi screens 2 on top, 2 on bottom" />
        </section>
        <section className="style">
          <SectionCard title={"Style Guide"} context={"Some style guides were inputted to ensure consistency in our designs and aesthetics of our app. We choose school colors to represent the school spirit but also colors that are appealing to other users, and simple fonts to be easily legible."} />
          <img src="/img/hi-fi/style.jpg" alt="fonts and colors used for ez park app" />
        </section>
        <section className="hifi">
          <SectionCard title={"Final Product"} context={"After extensive design sessions and feedback recieved from users with our lo-fi designs, here is our final product:"} />
          <iframe title="ezpark hifi" style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7HkrLf9MtH7tRYR6JN9mmz%2FEZ-Park%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-168%26viewport%3D460%252C235%252C0.14%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A166%26mode%3Ddesign" allowFullScreen />
        </section>
      </article>
    );
  }