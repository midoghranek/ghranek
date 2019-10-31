import React, { Component } from "react";

// Constants
import title from "../constants/titles.json";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="inner">
          <h1>{title.homePage}</h1>
          <span>{title.description}</span>
        </div>
      </header>
    );
  }
}

export default Header;
