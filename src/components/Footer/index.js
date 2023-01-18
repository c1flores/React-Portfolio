import React from "react";
import { FaGithub, FaLinkedin, FaGoodreads } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/c1flores" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/christian-flores-972551178/"
            target="blank"
          >
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a
            href="https://www.goodreads.com/review/list/156639775?ref=nav_mybooks"
            target="blank"
          >
            <li>
              <FaGoodreads />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
