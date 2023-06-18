import React from "react";
import { Link } from "react-router-dom";

  export default function MeyeCard() {
    return (
      <section className="meye">
        <div className="img">
          <Link to="https://myearthyourearth.com/" target="_blank">
          <img className="logo" src="/img/MEYE Thumbnail.png" alt="my earth your earth website Thumbnail" />
            <div className="text">
              <p className="prompt">A non-profit organization that focuses on making positive impacts to the communities and the world at large. Our mission is to ensure that everyone in the world is can live a safe, and healthy life. We provide our community with knowledge and support on how our actions can influence the planet for the better.</p>
              <p className="prompt2">We are actively looking for volunteers and sponsors to extend our help to more people in need. Check out the website for more information.</p>
            </div>
          </Link>
        </div>
        <div className="desc">
            <h2><Link to="https://myearthyourearth.com/" target="_blank" >My Earth Your Earth</Link></h2>
        </div>
      </section>
    );
  }