import React, { Component } from "react";
import skills from "../constants/skills.json";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
        {skills.map(skill => (
          <span>#{skill} </span>
        ))}
      </div>
    );
  }
}
