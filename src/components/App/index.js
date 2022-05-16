import Aos from 'aos';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import Theme from '../Theme';
import Error from '../Error';
import About from '../About';
import Contact from '../Contact';
import Home from '../Home';
import MyWorks from '../MyWorks';
import Navigation from '../Navigation';
import './style.scss';
import 'aos/dist/aos.css';
import SkillsTechnos from '../SkillsTechnos';

const App = () => {
  const [themeDark, setThemeDark] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  return (
    <div className={`app ${!themeDark ? 'app--light' : ''}`}>
      <Navigation themeDark={themeDark} />
      <Theme setThemeDark={setThemeDark} themeDark={themeDark} />
      <Routes>
        <Route
          path="/"
          element={<><Home /><About /> <SkillsTechnos /> <MyWorks /> <Contact /></>}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
