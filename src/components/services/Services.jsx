import React, { useState } from "react";
import "./services.css";
import { NavLink, Link } from "react-router-dom";
import imgquiz from "../../assets/Quiz-App-01.png";
import imgrobot from "../../assets/robofriends-index-composite.jpg";
import imgvideo from "../../assets/videosplayer.jpg";
import imggithub from "../../assets/téléchargement .png";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">my achievements</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <img src={imgquiz} alt="" />

            <h3 className="services__title">
              Quiz <br /> app
            </h3>
          </div>

          <a
            href="https://quiz-app-dayanal2.kda-dev-web-2022-classe-b.repl.co/"
            target="_blank"
          >
            <span className="services__button">
              View More
              <i
                className="uil uil-arrow-right services__button-icon"
                hrf="https://quiz-app-dayanal2.kda-dev-web-2022-classe-b.repl.co/"
              ></i>
            </span>
          </a>
          <div></div>
        </div>

        <div className="services__content">
          <div>
            <img src={imgrobot} />
            {/* <i className="uil uil-web-grid services__icon"></i> */}
            <h3 className="services__title">
              Mes amis <br /> Robots
            </h3>
          </div>

          <a
            href="https://mes-amis-robots-site-de-presentation-des-robots-jo-dayanal2.kda-dev-web-2022-classe-b.repl.co/"
            target="_blank"
          >
            <span className="services__button">
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </a>
          <div></div>
        </div>

        <div className="services__content">
          <div>
            <img src={imgvideo} />

            <h3 className="services__title">
              Videos <br /> Player
            </h3>
          </div>

          <a
            href="https://github.com/DAYANALONYAMA/Pesonal-youtube-Player-"
            target="_blank"
            className="services__button"
          >
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </a>
        </div>

        <div className="services__content">
          <div>
            <img src={imggithub} />

            <h3 className="services__title">
              See more <br /> Projects
            </h3>
          </div>

          <a href="https://github.com/DAYANALONYAMA" target="_blank">
            <span className="services__button">
              View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>
          </a>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
