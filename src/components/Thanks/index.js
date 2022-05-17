import { Link } from 'react-router-dom';
import './style.scss';

const Thanks = () => (
  <div className="thanks">
    <h1>Merci pour votre message</h1>
    <h2>Je vous répondrai dans les plus bref délais</h2>
    <Link to="/">Retour à l'accueil</Link>
  </div>
);

export default Thanks;
