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
    >Some of my
      <span> Works</span>
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
        <a target="_blank" href="#"><img className="worksContainer__picture" alt="" src="" /></a>
        <p className="worksContainer__label">PortFolio-Adrian-Larenaudie</p>
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
        <a target="_blank" href="#"><img className="worksContainer__picture" alt="" src="" /></a>
        <p className="worksContainer__label">RetroWave-Timer-ft-Wilhelm-cry</p>
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
        <a target="_blank" href="#"><img className="worksContainer__picture" alt="" src="" /></a>
        <p className="worksContainer__label">Star-Wars-Challenge-BCode</p>
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
        <a target="_blank" href="#"><img className="worksContainer__picture" alt="" src="" /></a>
        <p className="worksContainer__label">Poke-Memory-Game</p>
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
        <a target="_blank" href="#"><img className="worksContainer__picture" alt="" src="" /></a>
        <p className="worksContainer__label">DragAndDropPuzzleReact</p>
      </div>
    </div>
  </div>
);

export default MyWorks;
