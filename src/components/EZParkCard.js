import React from "react";
import { Link } from "react-router-dom";

  export default function EZParkCard() {
    return (
        <section className="ezpark">
          <div className="img">
            <Link to="/EZPark">
              <img className="logo" src="/img/EZ Park Thumbnail.png" alt="EZ Park Project Thumbnail"/>
              <div className="text">    
                <p className="prompt">Check it out!</p>
              </div>
            </Link>
          </div>
          <div className="desc">
            <h2><Link to="/EZPark">EZ Park</Link></h2>
          </div>
        </section>
    );
  }