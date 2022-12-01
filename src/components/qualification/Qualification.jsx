import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-graduation-cap qualification__icon">
              Education
            </i>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Developer Web</h3>
                <span className="qualification__subtitle">
                  Kinshasa Digital Academy
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022-Present
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
                <h3 className="qualification__title">UI/UX</h3>
                <span className="qualification__subtitle">
                  Kinshasa Digital Academy
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022-Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Developer Web</h3>
                <span className="qualification__subtitle">
                  Kinshasa Digital Academy
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022-Present
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
                <h3 className="qualification__title">UI/UX</h3>
                <span className="qualification__subtitle">
                  Kinshasa Digital Academy
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022-Present
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
