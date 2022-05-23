/* eslint-disable jsx-a11y/label-has-associated-control */
import './style.scss';
import PropTypes from 'prop-types';

const Theme = ({ setThemeDark, themeDark }) => {
  const handleChange = () => {
    localStorage.setItem('themeDark', JSON.stringify(!themeDark));
    setThemeDark(!themeDark);
  };
  return (
    <div
      className="theme"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="900"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="theme__switcher">
        <input checked={!themeDark} onChange={handleChange} type="checkbox" id="input" value="true" />
        <label htmlFor="input">Theme {themeDark ? 'Light' : 'Dark'}</label>
        <label className="label" htmlFor="input">
          <span className="slider-check" />
        </label>
      </div>
    </div>
  );
};

Theme.propTypes = {
  setThemeDark: PropTypes.func.isRequired,
  themeDark: PropTypes.bool.isRequired,
};

export default Theme;
