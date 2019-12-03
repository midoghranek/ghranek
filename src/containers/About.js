import React, { Component } from "react";
import myPhoto from "../assets/images/my-photo.png";
import PageHeader from "../components/PageHeader";

const Color = props => {
  let style = {
    width: props.width
  };
  return <span className="color" style={style}></span>;
};

class About extends Component {
  componentDidMount() {
    document.getElementById("header").classList.add("hide");
    const animateCSS = (element, animationName) => {
      const node = document.querySelector(element);
      node.classList.add("animated", animationName);
    };
    animateCSS(".box", "bounceInDown");
    animateCSS(".photo", "bounceInRight");
  }
  render() {
    return (
      <div>
        <PageHeader title="About me" />
        <div className="box">
          <div className="inner">
            <h1>I am Muhammad. I like to create Apps</h1>
            <p>
              Hello, My name is Muhammad Abu 'l-Gharaniq, I'm working as a full
              stack web developer, I'm designing and developing Mobile and Web
              Apps.
            </p>
            <div className="skills">
              <h1>Skills</h1>
              <div className="skill-box">
                <div className="one-skill">
                  <h4>Photoshop</h4>
                  <div className="skill-lines">
                    <span className="dark"></span>
                    <Color width="69%" />
                  </div>
                </div>
                <div className="one-skill">
                  <h4>Adobe XD</h4>
                  <div className="skill-lines">
                    <span className="dark"></span>
                    <Color width="86%" />
                  </div>
                </div>
                <div className="one-skill">
                  <h4>HTML</h4>
                  <div className="skill-lines">
                    <span className="dark"></span>
                    <Color width="90%" />
                  </div>
                </div>
                <div className="one-skill">
                  <h4>CSS & SASS</h4>
                  <div className="skill-lines">
                    <span className="dark"></span>
                    <Color width="93%" />
                  </div>
                </div>
                <div className="one-skill">
                  <h4>Javascript</h4>
                  <div className="skill-lines">
                    <span className="dark"></span>
                    <Color width="92%" />
                  </div>
                </div>
                <div className="one-skill">
                  <h4>jQuery</h4>
                  <div className="skill-lines">
                    <span className="dark"></span>
                    <Color width="89%" />
                  </div>
                </div>
                <div className="one-skill">
                  <h4>Reactjs</h4>
                  <div className="skill-lines">
                    <span className="dark"></span>
                    <Color width="62%" />
                  </div>
                </div>
                <div className="one-skill">
                  <h4>Nodejs</h4>
                  <div className="skill-lines">
                    <span className="dark"></span>
                    <Color width="48%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="photo">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="shape-3">
            <img src={myPhoto} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
