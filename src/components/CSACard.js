import React from "react";
import { Link } from "react-router-dom";

  export default function CSACard() {
    return (
      <div className="card">
        <Link to="https://www.csauw.com/" target="_blank">
        <div className="csa">
          <div className="img">
            <Link to="https://www.csauw.com/" target="_blank">
              <img className="logo" src="/img/csa.png" alt="Chinese Student Association Website Thumbnail"/>
              <div className="text">    
                <p className="prompt">Check it out!</p>
              </div>
            </Link>
          </div>
          <div className="desc">
            <h2><Link to="https://www.csauw.com/" target="_blank">Chinese Student Association</Link></h2>
            <p style={{color: "#1c2022"}}>student culutral club web application</p>
          </div>
        </div>
        </Link>  
      </div>
    );
  }