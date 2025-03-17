import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      
      <h2>Made by Khoi Phan©</h2>
      <p>
        <ul>
          <a href="https://github.com/khoiphan-9194">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/jason-khoi-phan-72701b1b6/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
         
        </ul>
      </p>
    </footer>
  );
}

export default Footer;