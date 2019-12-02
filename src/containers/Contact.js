import React, { Component } from "react";

import PageHeader from "../components/PageHeader";

class Contact extends Component {
  componentDidMount() {
    document.getElementById("header").classList.add("hide");
  }
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
                <form>
                  <input type="text" placeholder="Name"></input>
                  <input type="email" placeholder="Email"></input>
                  <textarea placeholder="Message"></textarea>
                  <input
                    class="button yellow"
                    type="submit"
                    value="Send Message"
                  />
                </form>
              </div>
            </div>

            <div className="map">
              <a
                target="blank"
                href="https://goo.gl/maps/CwQpgnSYVrj9NngH7"
              ></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
