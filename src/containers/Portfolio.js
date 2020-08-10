import React, { useEffect, useState } from "react";

import PageHeader from "../components/PageHeader";
import portfolio from "../constants/portfolio";

const tags = ["Featured", "React", "HTML", "Design", "Blogger", "All"];

const Portfolio = () => {
  const [currrentTag, setcurrrentTag] = useState("Featured");

  useEffect(() => {
    document.getElementById("header").classList.add("hide");
    const animateCSS = (element, animationName) => {
      const node = document.querySelector(element);
      node.classList.add("animated", animationName);
    };
    animateCSS(".projects", "bounceInUp");
  }, []);

  const filter = (i) => {
    setcurrrentTag(i);
  };

  return (
    <div>
      <PageHeader title="Portfolio" />
      <div className="port">
        <div className="inner">
          <ul className="filter">
            {tags.map((tag, index) => {
              if (currrentTag === tag) {
                return (
                  <li
                    className="active"
                    key={index}
                    onClick={() => filter(tag)}
                  >
                    {tag}
                  </li>
                );
              } else {
                return (
                  <li key={index} onClick={() => filter(tag)}>
                    {tag}
                  </li>
                );
              }
            })}
          </ul>
          <div className="projects">
            {portfolio.map((project) => (
              <div
                className={`project ${project.tags.join(" ")} ${
                  project.featured ? "featued" : ""
                }`}
                style={
                  currrentTag.toLowerCase() === "all"
                    ? { display: "block" }
                    : currrentTag.toLowerCase() === "featured" &&
                      project.featured
                    ? { display: "block" }
                    : project.tags.includes(currrentTag.toLowerCase())
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <div className="project-photo">
                  <a target="blank" href={project.link}>
                    <img src={project.image} alt=""></img>
                  </a>
                </div>
                <div className="project-title">
                  <a target="blank" href={project.link}>
                    <h3>{project.title}</h3>
                  </a>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
