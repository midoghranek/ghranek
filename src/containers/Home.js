import React, { Component } from "react";
import "../styles/home.scss";

// Assets
import photo from "../assets/images/ghranek-photo.jpg";

// Components
import Skills from "../components/Skills";
import Social from "../components/Social";

// Constants
import title from "../constants/titles.json";
import profile from "../constants/profile.json";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="path" />
        <div className="right-art" />
        <header>
          <div className="inner">
            <h1>{title.homePage}</h1>
            <span>{title.description}</span>
          </div>
        </header>
        <div className="box">
          <div className="inner">
            <img src={photo} alt="" />
            <h1>{profile.name}</h1>
            <Skills />
          </div>
        </div>
        <div className="inner">
          <Social />
        </div>
      </div>
    );
  }
}

export default Home;
