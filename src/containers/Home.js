import React, { Component } from "react";

// Assets
import CV from "../assets/files/GharaniqCV.pdf";

// Components
import Social from "../components/Social";

// Constants
import profile from "../constants/profile.json";

class Home extends Component {
  componentDidMount() {
    document.getElementById("header").classList.remove("hide");
    const animateCSS = (element, animationName) => {
      const node = document.querySelector(element);
      node.classList.add("animated", animationName);
    };
    animateCSS(".box", "bounceInDown");
    animateCSS(".right-art", "bounceInRight");
    animateCSS(".icons", "bounceInUp");
  }

  handlePush = event => {
    event.preventDefault();
    this.props.history.push("/contact");
  };

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
              <a
                className="white button"
                onClick={this.handlePush}
                href="/contact"
              >
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
