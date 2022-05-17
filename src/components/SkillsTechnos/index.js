import Bootstrap from '../Svg/technoSvg/Bootstrap';
import Css from '../Svg/technoSvg/Css';
import GitIcon from '../Svg/technoSvg/GitIcon';
import GitHub from '../Svg/technoSvg/GitHub';
import Html from '../Svg/technoSvg/Html';
import Javascript from '../Svg/technoSvg/Javascript';
import MySql from '../Svg/technoSvg/MySql';
import Php from '../Svg/technoSvg/Php';
import React from '../Svg/technoSvg/React';
import Sass from '../Svg/technoSvg/Sass';
import './style.scss';

const SkillsTechnos = () => (
  <div id="skills" className="skillsTechnos page">
    <h1
      className="page__background"
      data-aos="fade-up"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-delay="900"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
    >Skills
    </h1>

    <div className="technos">
      <h2
        className="technos__title"
        data-aos="fade"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="300"
        data-aos-duration="300"
        data-aos-anchor-placement="top-bottom"
      >Je travaille avec
      </h2>
      <div
        className="technos__container"
        data-aos="zoom-in-up"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="700"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
      >
        <Html />
        <Css />
        <Javascript />
        <GitIcon />
        <GitHub />
        <MySql />
        <Php />
        <React />
        <Sass />
        <Bootstrap />
      </div>
    </div>

    <div
      className="training"
      data-aos="flip-right"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-anchor-placement="top-bottom"
    >
      <h2 className="training__title">Formation Développeur Web
      </h2>
      <p className="training__text">Ecole
        <a target="_blank" href="https://oclock.io/?utm_source=google&utm_medium=cpc&utm_campaign=Brand&adgroupname=Oclock&keyword=oclock&gclid=CjwKCAjw7IeUBhBbEiwADhiEMWhpCi3SVz8Menlmjw7R5L1lFWYRHIHSS9mvcpWBQX2g11rUkbVZkhoC92wQAvD_BwE" rel="noreferrer"> O'clock </a>
        promo Boson
      </p>
    </div>

    <div className="softSkills">
      <h2
        className="softSkills__title"
        data-aos="fade-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="200"
        data-aos-duration="500"
      >Soft
        <span> Skills</span>
      </h2>
      <ul className="softSkills__liste">
        <li
          className="softSkills__item"
          data-aos="fade-left"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="300"
          data-aos-duration="500"
        >Organisé
        </li>
        <li
          className="softSkills__item"
          data-aos="fade-left"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="400"
          data-aos-duration="500"
        >Communiquant
        </li>
        <li
          className="softSkills__item"
          data-aos="fade-left"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="500"
          data-aos-duration="500"
        >Esprit d'équipe
        </li>
        <li
          className="softSkills__item"
          data-aos="fade-left"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="600"
          data-aos-duration="500"
        >Gestion du stress
        </li>
        <li
          className="softSkills__item"
          data-aos="fade-left"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-delay="700"
          data-aos-duration="500"
        >Résolution de problème
        </li>
      </ul>
    </div>

  </div>
);

export default SkillsTechnos;
