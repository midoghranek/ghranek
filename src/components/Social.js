import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faBehance,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

export default class Social extends Component {
  render() {
    return (
      <div className="icons">
        <a target="blank" href="https://www.facebook.com/midoghranek">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a target="blank" href="https://twitter.com/midoghranek">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a target="blank" href="https://github.com/midoghranek">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a target="blank" href="https://www.behance.net/midoghranek">
          <FontAwesomeIcon icon={faBehance} />
        </a>
        <a target="blank" href="https://wa.me/201289454915">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    );
  }
}
