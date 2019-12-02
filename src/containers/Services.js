import React, { Component } from "react";

import PageHeader from "../components/PageHeader";
import services from "../constants/services.json";

class Services extends Component {
  componentDidMount() {
    document.getElementById("header").classList.add("hide");
  }
  render() {
    return (
      <div>
        <PageHeader title="Services" />
        <div className="services">
          <div className="inner">
            <div className="services-inner">
              {services.map(service => (
                <div className="service">
                  <div className="service-content">
                    <span className="service-num">
                      {services.indexOf(service) + 1}
                    </span>
                    <h2>{service.title}</h2>
                    <p>{service.text}</p>
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

export default Services;
