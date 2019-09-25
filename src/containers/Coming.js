import React, { Component } from "react";
import "../styles/coming.scss";

// Assets
import photo from "../assets/images/ghranek-photo.jpg";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// Components
import Skills from "../components/Skills";
import Social from "../components/Social";

// Constants
import title from "../constants/titles.json";
import profile from "../constants/profile.json";

class Coming extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">{title.comingPage}</h1>
        <div className="box">
          <img src={photo} alt="" />
          <h1>{profile.name}</h1>
          <span>@{profile.username}</span>
          <div className="coffee">
            <FontAwesomeIcon icon={faCoffee} />
          </div>
          <Skills />
        </div>
        <Social />
      </div>
    );
  }
}

export default Coming;
