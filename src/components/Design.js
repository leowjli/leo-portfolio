import React from "react";

  export default function Design() {
    return (
      <section>
        <div className="sitemap">
          <h1>Site Map</h1>
          <p>
            We mapped out the important product features that can best benefit the users in our site map. This helped us structure and design each of the pages the users will encounter and increased the overall smoothness and functionality of the app.
          </p>
          <img src="/img/EZPark Site Map.png" alt="ez park site map" />
        </div>
        <div className="lofi">
          <h1>Low Fidelity Prototype</h1>
          <p>
            Our Lo-fi was created as we inputted our research into design and structure. We wanted to make sure the user feels at ease with the information flow so we went for simplicity.
          </p>
          <img src="/img/lo-fi/Lo-Fi.png" alt="lo-fi screens 2 on top, 2 on bottom" />
        </div>
        <div className="style">
          <h1>Style Guide</h1>
          <p>
            Some style guides were inputted to ensure consistency in our designs and aesthetics of our app. We choose school colors to represent the school spirit but also colors that are appealing to other users, and simple fonts to be easily legible.
          </p>
          <img src="/img/hi-fi/style.jpg" alt="fonts and colors used for ez park app" />
        </div>
        <div className="hifi">
          <h1>Final Product</h1>
          <p>
            After extensive design sessions and feedback recieved from users with our lo-fi designs, here is our final product, EZ Park.
          </p>
          <iframe title="ezpark hifi" style={{border: "1px solid rgba(0, 0, 0, 0.1);"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7HkrLf9MtH7tRYR6JN9mmz%2FEZ-Park%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-168%26viewport%3D460%252C235%252C0.14%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A166%26mode%3Ddesign" allowfullscreen></iframe>
        </div>
      </section>
    );
  }