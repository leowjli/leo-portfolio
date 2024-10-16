import React from "react";
import { Link } from "react-router-dom";

  export default function EZParkCard() {
    return (
      <div className="card">
        <Link to="/EZPark" target="_blank">
        <div className="ezpark">
          <div className="img">
            <Link to="/EZPark" target="_blank">
              <img className="logo" src="/img/ezpark/EZ Park Thumbnail.png" alt="EZ Park Project Thumbnail"/>
              <div className="text">    
                <p className="prompt">Check it out!</p>
              </div>
            </Link>
          </div>
          <div className="desc">
            <h2><Link to="/EZPark" target="_blank">EZ Park</Link></h2>
            <p style={{color: "#1c2022"}}>mobile application design</p>
          </div>
        </div>
        </Link>  
      </div>
    );
  }