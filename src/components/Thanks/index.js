import { Link } from 'react-router-dom';
import Theme from '../Theme';
import './style.scss';

const Thanks = () => (
  <div className="container">
    <Theme />
    <div
      className="thanks"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <h1 className="thanks__background">THANKS.</h1>
      <h1
        className="thanks__title"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >Merci pour votre
        <span> message</span>
      </h1>
      <Link
        className="thanks__link"
        to="/"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="600"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >Retour à l'accueil
      </Link>
    </div>
  </div>
);

export default Thanks;
