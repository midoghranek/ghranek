import React, { Component } from "react";
import "../styles/home.scss";

// Assets
import photo from "../assets/images/ghranek-photo.jpg";

// Components
import Skills from "../components/Skills";
import Social from "../components/Social";
import Header from "../components/Header";

// Constants
import profile from "../constants/profile.json";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="path" />
        <div className="right-art" />
        <Header />
        <div className="box">
          <div className="inner">
            <img src={photo} alt="" />
            <h1>{profile.name}</h1>
            <Skills />
          </div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;
