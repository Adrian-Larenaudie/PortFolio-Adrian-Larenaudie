import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Theme from '../Theme';
import './style.scss';

// eslint-disable-next-line react/prop-types
const Error = ({ themeDark, setThemeDark }) => (
  <div className="container">
    <div
      className="notFound"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <Theme setThemeDark={setThemeDark} themeDark={themeDark} />
      <h1 className="notFound__background">404</h1>
      <h1
        className="notFound__title"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <span>404</span>
      </h1>
      <h2
        className="notFound__subtitle"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="400"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >Oups Page Not
        <span> Found</span>
      </h2>
      <p
        className="notFound__text"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="600"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >Le lien sur lequel vous avez cliquez est peut être cassé ou la page a été retirée
      </p>
      <Link
        className="notFound__link"
        to="/"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="600"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >Retour à l'accueil?
      </Link>
    </div>
  </div>
);

Theme.propTypes = {
  setThemeDark: PropTypes.func.isRequired,
  themeDark: PropTypes.bool.isRequired,
};

export default Error;
