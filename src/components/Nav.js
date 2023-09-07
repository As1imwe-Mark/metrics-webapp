import { Link } from 'react-router-dom';
import { NavArrow, Microphone, Settings } from './NavIcons';

const Nav = () => (
  <nav>
    <div className="nav-items">
      <Link className="nav-icons" to="/">
        <button
          type="button"
          className="back-arrow"
        >
          <NavArrow />
        </button>
      </Link>
      <div><h3>Home</h3></div>
    </div>
    <div><h4>Crypto-Hub</h4></div>
    <div className="nav-items icons">
      <div className="nav-icons"><Settings /></div>
      <div className="nav-icons"><Microphone /></div>
    </div>

  </nav>
);

export default Nav;
