import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container ">
        <h1 className="footer__title">AnderWander</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/anderwander"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://github.com/Anderwander"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="bx bxl-github"></i>
          </a>

          <a href="#twitter" className="footer__social-link" target={"_blank"}>
            <i class="bx bxl-twitter"></i>
          </a>

          <a href="#linkedin" className="footer__social-link" target={"_blank"}>
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; AnderWander. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
