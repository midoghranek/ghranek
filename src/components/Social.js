import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faBehance,
  faWhatsapp,
  faFacebookF,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

import socialLinks from "../constants/social.json";

socialLinks.map((social) => {
  switch (social.name) {
    default:
      return (social.icon = <FontAwesomeIcon icon={faLink} />);
    case "facebook":
      return (social.icon = <FontAwesomeIcon icon={faFacebookF} />);
    case "twitter":
      return (social.icon = <FontAwesomeIcon icon={faTwitter} />);
    case "github":
      return (social.icon = <FontAwesomeIcon icon={faGithub} />);
    case "behance":
      return (social.icon = <FontAwesomeIcon icon={faBehance} />);
    case "dribbble":
      return (social.icon = <FontAwesomeIcon icon={faDribbble} />);
    case "whatsapp":
      return (social.icon = <FontAwesomeIcon icon={faWhatsapp} />);
  }
});

export default class Social extends Component {
  render() {
    return (
      <div className="icons">
        <div className="inner">
          {socialLinks.map((social, index) => {
            return (
              <a key={index} target="blank" href={social.link}>
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
