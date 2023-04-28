import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/anderwander"
        className="home__social-icon"
        target={"_blank"}
      >
        <i class="uil uil-instagram"></i>
      </a>

      <a
        href="https://github.com/Anderwander"
        className="home__social-icon"
        target={"_blank"}
      >
        <i class="uil uil-github"></i>
      </a>

      <a href="#twitter" className="home__social-icon" target={"_blank"}>
        <i class="uil uil-twitter"></i>
      </a>

      <a href="#linkedin" className="home__social-icon" target={"_blank"}>
        <i class="uil uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;
