import React from "react";
import { Link } from "react-router-dom";

  export default function MeyeCard() {
    return (
      <section className="meye">
        <div className="img">
          <Link to="https://myearthyourearth.com/" className="meye" target="_blank">
          <img className="logo" src="/img/MEYE Thumbnail.png" alt="my earth your earth website Thumbnail" />
            <div className="text">
              <p className="prompt">A non-profit organization started by a group of friends that focuses on making positive impacts to the communities around us and the world at large.</p>
              <p className="prompt">Our mission is to make sure that everyone in the world is able to live a safe, healthy, and well life. We try to provide our community with knowledge and support on how our actions can influence the planet for the better.</p>
              <p className="prompt">I created a website to allow other students and people interested in changing the world. We are actively looking for volunteers and sponsors to extend our help to more people in need. Check out the website for more information.</p>
            </div>
          </Link>
        </div>
        <div className="desc">
            <h2><Link to="https://myearthyourearth.com/">My Earth Your Earth</Link></h2>
        </div>
      </section>
    );
  }