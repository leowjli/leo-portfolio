import React from "react";
import { Link } from "react-router-dom";

  export default function GenZCard() {
    return (
      <div className="card">
        <div className="genz">
          <div className="img">
            <Link to="https://keeping-up-with-gen-zs.web.app/" target="_blank">
              <img className="logo" src="/img/keepingUpWithGenZs.png" alt="Keeping Up With Gen Zs Project Thumbnail"/>
              <div className="text">    
                <p className="prompt">Check it out!</p>
              </div>
            </Link>
          </div>
          <div className="desc">
            <h2><Link to="https://keeping-up-with-gen-zs.web.app/" target="_blank">Keeping Up With Gen Zs</Link></h2>
            <p>gen Z slang website</p>
          </div>
        </div>
      </div>
    );
  }