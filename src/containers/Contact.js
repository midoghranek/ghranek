import React, { Component } from "react";
import Axios from "axios";

import PageHeader from "../components/PageHeader";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  componentDidMount() {
    document.getElementById("header").classList.add("hide");
    document.getElementById("header").classList.add("hide");
    document.getElementById("header").classList.add("hide");
    const animateCSS = (element, animationName) => {
      const node = document.querySelector(element);
      node.classList.add("animated", animationName);
    };
    animateCSS(".map", "bounceInRight");
    animateCSS(".left-content", "bounceInLeft");
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleMessageChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      time: new Date()
    };
    Axios.post(
      "https://europe-west1-ghranek-98d36.cloudfunctions.net/submit",
      data
    )
      .then(res => {
        if (res.data.isEmailSend) {
          document.getElementById("msg").innerHTML =
            "Message Sent successfully..";
          setTimeout(function() {
            document.getElementById("msg").innerHTML = "";
          }, 3000);

          this.setState({
            name: "",
            email: "",
            message: ""
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <PageHeader title="Contact" />
        <div className="contact">
          <div className="inner">
            <div className="left-content">
              <div className="info">
                <p>Email: midoghranek@hotmail.com</p>
                <p>Phone: +201289454915</p>
                <p>Address: Kafr Al-Dawar, Al Behira, Egypt</p>
              </div>
              <div className="form">
                <form id="contact-form" onSubmit={this.handleSubmit}>
                  <input
                    required="required"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                  ></input>
                  <input
                    required="required"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                  ></input>
                  <textarea
                    required="required"
                    placeholder="Message"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleMessageChange}
                  ></textarea>
                  <input
                    className="button yellow"
                    type="submit"
                    value="Send Message"
                  />
                  <p className="msg" id="msg"></p>
                </form>
              </div>
            </div>

            <div className="map">
              <a target="blank" href="https://goo.gl/maps/mLm9DiSy5QpEgSHa7">
                map
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
