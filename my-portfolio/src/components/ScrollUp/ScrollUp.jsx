import React from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollUp");
    if (this.scrollY >= 560) scrollUp.classList.add("showScroll");
    else scrollUp.classList.remove("showScroll");
  });

  return (
    <a href="#" className="scrollUp">
      <i class="bx bx-up-arrow-alt scrollUp__icon"></i>
    </a>
  );
};

export default ScrollUp;
