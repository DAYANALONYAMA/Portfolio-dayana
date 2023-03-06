import React, { useState } from "react";
import "./services.css";
import { NavLink, Link } from "react-router-dom";
import imgquiz from "../../assets/Quiz-App-01.png";
import imgrobot from "../../assets/robofriends-index-composite.jpg";
import imgvideo from "../../assets/videosplayer.jpg";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">my achievements</span>
      <div className="services__container container grid">
        <div className="services__content">
          <a
            href="https://quiz-app-dayanal2.kda-dev-web-2022-classe-b.repl.co/"
            target="_blank"
          >
            <div>
              <img src={imgquiz} alt="" />
              {/* <i className="uil uil-web-grid services__icon"></i> */}
              <h3 className="services__title">
                Quiz <br /> app
              </h3>
            </div>
          </a>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i
              className="uil uil-arrow-right services__button-icon"
              hrf="https://quiz-app-dayanal2.kda-dev-web-2022-classe-b.repl.co/"
            ></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal  active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times sevices__modal-close"
              ></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                illo iste perspiciatis, sequi odit a voluptatem veritatis eum
                quas nobis dolores porro voluptatibus! Perferendis hic placeat
                nostrum tenetur nam nulla!
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <a
            href="https://mes-amis-robots-site-de-presentation-des-robots-jo-dayanal2.kda-dev-web-2022-classe-b.repl.co/"
            target="_blank"
          >
            <div>
              <img src={imgrobot} />
              {/* <i className="uil uil-web-grid services__icon"></i> */}
              <h3 className="services__title">
                Mes amis <br /> Robots
              </h3>
            </div>
          </a>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal  active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times sevices__modal-close"
              ></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                illo iste perspiciatis, sequi odit a voluptatem veritatis eum
                quas nobis dolores porro voluptatibus! Perferendis hic placeat
                nostrum tenetur nam nulla!
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content" onClick={() => toggleTab(1)}>
          <a
            href="https://github.com/DAYANALONYAMA/Pesonal-youtube-Player-"
            target="_blank"
          >
            <div>
              <img src={imgvideo} />
              {/* <i className="uil uil-arrow services__icon"></i> */}
              <h3 className="services__title">
                Videos <br /> Player
              </h3>
            </div>
          </a>
          <span className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times sevices__modal-close"></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                illo iste perspiciatis, sequi odit a voluptatem veritatis eum
                quas nobis dolores porro voluptatibus! Perferendis hic placeat
                nostrum tenetur nam nulla!
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Web page development</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
