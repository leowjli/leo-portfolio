import React from "react";
import { Link } from "react-router-dom";

  export default function SlangSphereCard() {
    return (
      <div className="card">
        <Link to="/SlangSphere" target="_blank">
        <div className="slangsphere">
          <div className="img">
            <Link to="/SlangSphere" target="_blank">
              <img className="logo" src="/img/slangsphere/SlangSphere Thumbnail.png" alt="SlangSphere Project Thumbnail"/>
              <div className="text">    
                <p className="prompt">Check it out!</p>
              </div>
            </Link>
          </div>
          <div className="desc">
            <h2><Link to="/SlangSphere" target="_blank">SlangSphere</Link></h2>
            <p style={{color: "#1c2022"}}>mobile application design</p>
          </div>
        </div>
        </Link>
      </div>
    );
  }