import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer">
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="mailto:enmorse49@gmail.com"
            target="_blank"
            style={{ color: "ghostwhite" }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.facebook.com/ernest.morse.56/"
            target="_blank"
            style={{ color: "ghostwhite" }}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.instagram.com/ernestnmorse/"
            target="_blank"
            style={{ color: "ghostwhite" }}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/enmorse"
            target="_blank"
            style={{ color: "ghostwhite" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/ernest-norman-morse-a619b7a0/"
            target="_blank"
            style={{ color: "ghostwhite" }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://twitter.com/49Ernest49"
            target="_blank"
            style={{ color: "ghostwhite" }}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.youtube.com/channel/UChcXZ0ejEGPrOKfWS-gqsTQ"
            target="_blank"
            style={{ color: "ghostwhite" }}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <p>Copyright &copy; {today.getFullYear()}</p>
      </ul>
    </footer>
  );
};

export default Footer;
