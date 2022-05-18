import Link from 'react-scroll/modules/components/Link';
import './style.scss';
import GitHubLogo from '../Svg/GitHubLogo';
import LinkedinLogo from '../Svg/LinkedinLogo';
import TwitterLogo from '../Svg/TwitterLogo';
import data from '../Data/data';

const Navigation = () => {
  const navData = data.navigation;

  return (
    <div
      className="navigation"
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="900"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >

      <div className="navigation__logo">
        <span>al</span>
      </div>

      <nav className="navigation__main">
        {navData.map((link) => (
          <Link activeClass="navigation__link--active" spy className="navigation__link" smooth duration={500} to={link.id} key={link.path}>{link.name}</Link>
        ))}
      </nav>

      <nav className="navigation__footer">
        <a href="https://twitter.com/Railedad?t=qefZIy7mK_0EU7MjhTchsw&s=03" target="_blank" rel="noreferrer">
          <TwitterLogo />
        </a>
        <a href="https://github.com/Adrian-Larenaudie" target="_blank" rel="noreferrer">
          <GitHubLogo />
        </a>
        <a href="https://www.linkedin.com/in/adrian-larenaudie-a82b8b238/" target="_blank" rel="noreferrer">
          <LinkedinLogo />
        </a>
      </nav>

    </div>
  );
};

export default Navigation;
