import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active  button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active  button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experiece
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web developer</h3>
                <span className="qualification__subtitle">
                  Lugar Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> fecha 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Landscaper</h3>
                <span className="qualification__subtitle">
                  Lugar Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> fecha 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web disigns</h3>
                <span className="qualification__subtitle">
                  Lugar Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> fecha 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Experto en hacer kk</h3>
                <span className="qualification__subtitle">
                  Lugar Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> fecha 2017 - 2019
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Creo que experiencia</h3>
                <span className="qualification__subtitle">
                  empresa y lugar{" "}
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> fecha 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Otro curro</h3>
                <span className="qualification__subtitle">
                  Otra empresa y lugar
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> fecha 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Otro curro</h3>
                <span className="qualification__subtitle">
                  otro empresa y sitio
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> fecha 2022 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Experto en curro de hacer kk
                </h3>
                <span className="qualification__subtitle">
                  Lugar Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i> fecha 2017 - 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
