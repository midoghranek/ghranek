import React, { Component } from "react";

// Assets
import CV from "../assets/files/GharaniqCV.pdf";

// Components
import Social from "../components/Social";

// Constants
import profile from "../constants/profile.json";

class Home extends Component {
  render() {
    return (
      <div className="home-contents">
        <div className="path" />
        <div className="right-art" />
        <div className="box">
          <div className="inner">
            <h1>{profile.name}</h1>
            <span className="line"></span>
            <p>
              Hello, My name is Muhammad Abu 'l-Gharaniq, I'm working as a full
              stack web developer, I'm designing and developing Mobile and Web
              Apps.
            </p>
            <div className="buttons">
              <a target="blank" className="yellow button" href={CV}>
                Download CV
              </a>
              <a className="white button" href="/contact">
                Hire me
              </a>
            </div>
          </div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;
