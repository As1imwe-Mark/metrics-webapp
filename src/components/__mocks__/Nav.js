import { NavArrow, Microphone, Settings } from './NavIcons';

const Nav = () => (
  <nav>
    <div className="nav-items">
      <div className="nav-icons"><NavArrow /></div>
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
