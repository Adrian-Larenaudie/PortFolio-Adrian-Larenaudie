import { Link } from 'react-scroll';
import Data from '../Data/data';
import './style.scss';

const About = () => {
  const skillsLink = Data.navigation.find((link) => link.id === 'skills');
  const contactLink = Data.navigation.find((link) => link.id === 'contact');
  return (
    <div id="about" className="about page ">

      <h1
        className="page__background"
        data-aos="fade-right"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-delay="900"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
      >ABOUT
      </h1>

      <div className="someWords">
        <h2
          className="someWords__title"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >Some words
        </h2>
        <p
          className="someWords__text"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="150"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          Après 11 années de travail en restauration.
          <br />
          Une reconversion professionnelle dans le développement web, Juillet 2021.
          <br />
          En autodidacte, puis en formation à l'école O'clock, Janvier 2022.
        </p>
        <p
          className="someWords__text"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="300"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          Ce qui à l'origine, était un projet de reconversion est
          très vite devenu une passion.
          <br />
          <Link
            className="someWords__link"
            smooth="true"
            duration={500}
            to={skillsLink.id}
            key={skillsLink.path}
          > Découvrez mes compétences.
          </Link>
          <br />
          Depuis ma soif d'apprendre n'a de cesse de croître et
          l'univers du code m'accompagne au quotidien.
        </p>
        <p
          className="someWords__text"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="450"
          data-aos-duration="300"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          Vous êtes intéressé,
          <Link
            className="someWords__link"
            smooth="true"
            duration={500}
            to={contactLink.id}
            key={contactLink.path}
          > contactez moi.
          </Link>
        </p>
      </div>

      <div
        className="cv"
        data-aos="fade"
        data-aos-offset="200"
        data-aos-delay="750"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <h2 className="cv__title">Mon CV</h2>
        <div className="cv__picture">
          <p className="cv__text">juste ici</p>
        </div>
      </div>

    </div>
  );
};

export default About;
