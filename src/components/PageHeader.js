import React, { Component } from "react";

class PageHeader extends Component {
  backClick = event => {
    event.preventDefault();
    document.getElementById("menu").classList.add("menu-active");
  };

  render() {
    return (
      <div className="page-header">
        <div className="inner">
          <a className="back-button" href="#!" onClick={this.backClick}>
            <span></span>
          </a>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

export default PageHeader;
