/* eslint-disable import/no-unresolved */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
import './style.scss';
import { useEffect } from 'react';
import data from '../Data/data';

const Home = () => {
  const tags = data.homeTags;

  const letterTodisplay = (index, letterIndex = 0) => {
    if (document.querySelector('.home__description') != undefined) {
      setTimeout(() => {
        if (document.querySelector('.home__description') != undefined) {
          document.querySelector('.home__description').textContent += tags[index][letterIndex];
          if (letterIndex < tags[index].length - 1) {
            letterTodisplay(index, letterIndex += 1);
          }
        }
      }, 100);
    }
  };

  const loopOnTags = (index = 0) => {
    if (document.querySelector('.home__description') != undefined) {
      if (index === tags.length) {
        index = 0;
      }
      const time = (tags[index].length * 250);
      setTimeout(() => {
        if (document.querySelector('.home__description') != undefined) {
          letterTodisplay(index);
          if (index < tags.length) {
            loopOnTags(index + 1);
          }
          document.querySelector('.home__description').textContent = '';
        }
      }, time);
    }
  };

  useEffect(() => {
    loopOnTags();
  }, []);

  return (
    <div id="home" className="home page">
      <h1
        data-aos="fade-right"
        className="page__background"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="600"
        data-aos-duration="1300"
        data-aos-anchor-placement="bottom-bottom"
      >HOME
      </h1>
      <div className="home__main-text">

        <h1
          className="home__title"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >Bienvenue sur mon site, <br /> je suis
          <span> Adrian</span>
        </h1>

        <p
          className="home__text"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="300"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >Développeur web Front-End / React
        </p>

        <p className="home__description" />
      </div>
      <div className="page__arrow" />
    </div>
  );
};

export default Home;
