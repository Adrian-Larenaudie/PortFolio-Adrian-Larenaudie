/* eslint-disable jsx-a11y/control-has-associated-label */
import './style.scss';

const MyWorks = () => (
  <div id="myWorks" className="myworks page">
    <h1
      className="page__background"
      data-aos="fade-down"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-delay="900"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
    >WORKS
    </h1>

    <h1
      className="page__title"
      data-aos="fade"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-delay="200"
      data-aos-duration="400"
      data-aos-anchor-placement="top-bottom"
    >Mes
      <span> Projets</span>
    </h1>

    <div className="worksContainer">
      <div
        className="worksContainer__item"
        data-aos="flip-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="300"
        data-aos-duration="400"
        data-aos-anchor-placement="top-bottom"
      >
        <a target="_blank" href="https://github.com/Adrian-Larenaudie/PortFolio-Adrian-Larenaudie" rel="noreferrer">
          <p className="worksContainer__label">Mon PortFolio</p>
        </a>
      </div>

      <div
        className="worksContainer__item"
        data-aos="flip-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="400"
        data-aos-duration="400"
        data-aos-anchor-placement="top-bottom"
      >
        <a target="_blank" href="https://github.com/Adrian-Larenaudie/RetroWave-Timer-ft-Wilhelm-cry" rel="noreferrer">
          <p className="worksContainer__label">Timer Retro Wave</p>
        </a>
      </div>

      <div
        className="worksContainer__item"
        data-aos="flip-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="500"
        data-aos-duration="400"
        data-aos-anchor-placement="top-bottom"
      >
        <a target="_blank" href="https://github.com/Adrian-Larenaudie/Star-Wars-Challenge-BCode" rel="noreferrer">
          <p className="worksContainer__label">Challenge d'intégration</p>
        </a>
      </div>

      <div
        className="worksContainer__item"
        data-aos="flip-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="600"
        data-aos-duration="400"
        data-aos-anchor-placement="top-bottom"
      >
        <a target="_blank" href="https://github.com/Adrian-Larenaudie/Poke-Memory-Game" rel="noreferrer">
          <p className="worksContainer__label">Memory Game</p>
        </a>
      </div>

      <div
        className="worksContainer__item"
        data-aos="flip-left"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="700"
        data-aos-duration="400"
        data-aos-anchor-placement="top-bottom"
      >
        <a target="_blank" href="https://github.com/Adrian-Larenaudie/DragAndDropPuzzleReact" rel="noreferrer">
          <p className="worksContainer__label">Puzzle Drag And Drop</p>
        </a>
      </div>
    </div>
  </div>
);

export default MyWorks;
