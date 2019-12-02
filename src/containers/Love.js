import React from "react";
import { Helmet } from "react-helmet";

import "../styles/love.scss";
import "../styles/beats.scss";

import Beats from "../components/Beats";

class Love extends React.Component {
  componentDidMount() {
    document.getElementById("header").classList.add("hide");
    document.getElementById("container").classList.add("cohide");
  }
  render() {
    return (
      <div className="love">
        <Helmet>
          <title>I Love you</title>
        </Helmet>
        <div className="App">
          <div className="content">
            <h1>Habiba</h1>
            <Beats />
            <h1>Muhammad</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Love;
