import React, { Component } from "react";
import "./Keg.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light fixed-top bg-light">
        {/* fixed-top bg-light */}
        <a className="navbar-brand" href="#">
          <div className = "navBar"> 
          CARS DIRECT </div>
        </a>
      </nav>
    );
  }
}

export default NavBar;
