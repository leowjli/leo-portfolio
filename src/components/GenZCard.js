import React from "react";
import { Link } from "react-router-dom";

  export default function GenZCard() {
    return (
        <section className="genz">
          <div className="img">
            <Link to="https://keeping-up-with-gen-zs.web.app/">
              <img className="logo" src="/img/keepingUpWithGenZs.png" alt="Keeping Up With Gen Zs Project Thumbnail"/>
              <div className="text">    
                <p className="prompt">Check it out!</p>
              </div>
            </Link>
          </div>
          <div className="desc">
            <h2><Link to="https://keeping-up-with-gen-zs.web.app/">Keeping Up With Gen Zs</Link></h2>
          </div>
        </section>
    );
  }