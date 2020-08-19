import React, { useEffect, useState } from "react";

import PageHeader from "../components/PageHeader";
import portfolio from "../constants/portfolio";

const Portfolio = () => {
  const [currrentTag, setcurrrentTag] = useState("featured");

  useEffect(() => {
    document.getElementById("header").classList.add("hide");
    const animateCSS = (element, animationName) => {
      const node = document.querySelector(element);
      node.classList.add("animated", animationName);
    };
    animateCSS(".projects", "bounceInUp");

    const search = document.location.search;
    if (search.includes("?q=")) {
      let tag = search.replace("?q=", "");
      setcurrrentTag(tag);
    }
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
            {portfolio.filters.map((tag, index) => {
              if (currrentTag === tag.toLowerCase()) {
                return (
                  <li
                    className="active"
                    key={index}
                    onClick={() => filter(tag.toLowerCase())}
                  >
                    {tag}
                  </li>
                );
              } else {
                return (
                  <li key={index} onClick={() => filter(tag.toLowerCase())}>
                    {tag}
                  </li>
                );
              }
            })}
          </ul>
          <div className="projects">
            {portfolio.data.map((project, index) => (
              <div
                key={index}
                className="project"
                style={
                  currrentTag === "all"
                    ? { display: "block" }
                    : currrentTag === "featured" && project.featured
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
