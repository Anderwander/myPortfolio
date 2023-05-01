import React from "react";

const Info = () => {
  return (
    <div className="about__info">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Llevo 150años</span>
      </div>

      <div className="about__box">
        <i class="bx bxs-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">Mínimo 2</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Los lunes de 8 a 9am</span>
      </div>
    </div>
  );
};

export default Info;
