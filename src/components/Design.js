import React from "react";

  export default function Design() {
    return (
      <section>
        <div class="sitemap">
          <h1>Site Map</h1>
          <p>
            We mapped out the important product features that can best benefit the users in our site map. This helped us structure and design each of the pages the users will encounter and increased the overall smoothness and functionality of the app.
            <img src="/img/EZPark Site Map.png" alt="ex park site map" />
          </p>
        </div>
        <div class="lofi">
          <h1>Low Fidelity Prototype</h1>
          <p>
            Our Lo-fi was created as we inputted our research into design and structure. We wanted to make sure the user feels at ease with the information flow so we went for simplicity.
          </p>
          <img src="/img/lo-fi/Lo-Fi.png" alt="lo-fi screens 2 on top, 2 on bottom" />
        </div>
        <div class="style">
          <h1>Style Guide</h1>
          <p>
            Some style guides were inputted to ensure consistency in our designs and aesthetics of our app. We choose school colors to represent the school spirit but also colors that are appealing to other users, and simple fonts to be easily legible.
          </p>
          <img src="./resources/images/hi-fi/style.jpg" alt="fonts and colors used for ez park app" />
        </div>
        <div class="hifi">
          <h1>Final Product</h1>
          <p>
            After extensive design sessions and feedback recieved from users with our lo-fi designs, here is our final product, EZ Park.
          </p>
          <iframe title="EZ Park Hi-Fi" style={{border: '1px solid rgba(0, 0, 0, 0.1);'}} width="640" height="650" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7HkrLf9MtH7tRYR6JN9mmz%2FEZ-Park%3Fnode-id%3D1%253A168%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A166" allowfullscreen />
        </div>
      </section>
    );
  }