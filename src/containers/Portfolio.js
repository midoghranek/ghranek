import React, { Component } from "react";

import PageHeader from "../components/PageHeader";
import portfolio from "../constants/portfolio";

class Portfolio extends Component {
  componentDidMount() {
    document.getElementById("header").classList.add("hide");
  }
  render() {
    return (
      <div>
        <PageHeader title="Portfolio" />
        <div className="port">
          <div className="inner">
            <div className="projects">
              {portfolio.map(project => (
                <div className="project">
                  <div className="project-photo">
                    <a target="blank" href={project.link}>
                      <img src={project.image} alt=""></img>
                    </a>
                  </div>
                  <div className="project-title">
                    <a target="blank" href={project.link}>
                      <h3>{project.title}</h3>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
