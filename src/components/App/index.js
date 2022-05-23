import Aos from 'aos';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Theme from '../Theme';
import Error from '../Error';
import About from '../About';
import Contact from '../Contact';
import Home from '../Home';
import MyWorks from '../MyWorks';
import Navigation from '../Navigation';
import SkillsTechnos from '../SkillsTechnos';
import Thanks from '../Thanks';
import './style.scss';
import 'aos/dist/aos.css';

const App = () => {
  const [themeDark, setThemeDark] = useState(
    JSON.parse(localStorage.getItem('themeDark')) != null ? JSON.parse(localStorage.getItem('themeDark')) : true,
  );

  const [screenWidth, setScreenWidth] = useState(document.documentElement.clientWidth);

  window.addEventListener('resize', () => {
    setScreenWidth(document.documentElement.clientWidth);
  });

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <div className={`app ${!themeDark ? 'app--light' : ''}`}>
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <>
              <Navigation screenWidth={screenWidth} />
              <Theme setThemeDark={setThemeDark} themeDark={themeDark} />
              <Home />
              <About />
              <SkillsTechnos />
              <MyWorks />
              <Contact />
            </>
          )}
        />
        <Route path="/thanks" element={<Thanks setThemeDark={setThemeDark} themeDark={themeDark} />} />
        <Route path="*" element={<Error setThemeDark={setThemeDark} themeDark={themeDark} />} />
      </Routes>
    </div>
  );
};

export default App;
