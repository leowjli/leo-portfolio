import React from "react";
import { Link } from "react-router-dom";

  export default function BudgetBuddyCard() {
    return (
      <div className="card">
        <Link to="https://budget-buddy.tjwong22.me/" target="_blank">
        <div className="ezpark">
          <div className="img">
            <Link to="/EZPark" target="_blank">
              <img className="logo" src="/img/budget_buddy.png" alt="Budget Buddy Project Thumbnail"/>
              <div className="text">    
                <p className="prompt">Do you budget? Need some help? Check it out!</p>
              </div>
            </Link>
          </div>
          <div className="desc">
            <h2><Link to="https://budget-buddy.tjwong22.me/" target="_blank">Budget Buddy</Link></h2>
            <p style={{color: "#1c2022"}}>fullstack budgeting web application</p>
          </div>
        </div>
        </Link>  
      </div>
    );
  }