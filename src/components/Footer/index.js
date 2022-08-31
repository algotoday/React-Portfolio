import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/algotoday" target="blank">
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
          </a>
          <a href="https://www.linkedin.com" target="blank">
            <li>
              <FontAwesomeIcon icon={faLinkedin}/>
            </li>
          </a>
          <a href="https://www.instagram.com" target="blank">
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
          </a>
          <a href="https://www.twitter.com" target="blank">
            <li>
              <FontAwesomeIcon icon={faTwitter}/>
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
