import React from "react";
import mus from "../images/mus.png";

function musicHeader() {
  return (
    <div className="header">
      <h3 className="headerTitle"><span className="my">my</span>MUSIC</h3>
      <div className="headerSearch">
        <form className="search">
          <i className="fa fa-search icon"></i>
                  <input className="input-field" type="text" placeholder="Search" />    
                  <img src={mus} alt="user" />
              </form>
              
      </div>
    </div>
  );
}

export default musicHeader;
