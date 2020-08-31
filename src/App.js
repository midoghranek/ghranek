import React, { Component } from "react";
import "./styles/main.scss";
import "./styles/home.scss";
import "animate.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

// Assets
import ResumeFile from "./assets/files/GharaniqCV.pdf";

// Constants
import title from "./constants/titles.json";

import Home from "./containers/Home";
import Love from "./containers/Love";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Services from "./containers/Services";
import Contact from "./containers/Contact";
import Privacy from "./containers/Privacy";

const Resume = () => {
  window.location.href = ResumeFile;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  menuClick = (event) => {
    event.preventDefault();
    this.setState({
      active: true,
    });
    document.getElementById("menu").classList.add("menu-active");
  };

  menuHide = (event) => {
    event.preventDefault();
    this.setState({
      active: false,
    });
    document.getElementById("menu").classList.remove("menu-active");
  };

  menuHideOnRouteHome = (event) => {
    this.setState({
      active: false,
    });
    document.getElementById("menu").classList.remove("menu-active");
    document.getElementById("header").classList.remove("hide");
  };

  menuHideOnRoute = (event) => {
    this.setState({
      active: false,
    });
    document.getElementById("menu").classList.remove("menu-active");
    document.getElementById("header").classList.add("hide");
  };

  render() {
    let className = "menu";
    if (this.state.active) {
      className += " menu-active";
    }
    return (
      <Router>
        <div id="container" className="container">
          <header id="header">
            <div className="inner">
              <h1>{title.homePage}</h1>
              <div className="nav">
                <a className="nav-button" href="#!" onClick={this.menuClick}>
                  <span></span>
                </a>
              </div>
            </div>
          </header>
          <div id="menu" className={className}>
            <a className="close-button" href="#!" onClick={this.menuHide}>
              <span></span>
            </a>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    exact={true}
                    onClick={this.menuHideOnRouteHome}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={this.menuHideOnRoute}>
                    About me
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio" onClick={this.menuHideOnRoute}>
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" onClick={this.menuHideOnRoute}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={this.menuHideOnRoute}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/love" component={Love} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/cv" component={Resume} />
            <Route path="/privacy" component={Privacy} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
