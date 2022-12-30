import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [showMenu, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!showMenu);
  };
  return (
    <div id="container-navBar">
      <div className="logo">
        <h1>Aron</h1>
      </div>
      <nav className={showMenu ? 'navbar toggle' : 'navbar'}>
        <ul className="navbar-li">
          <li onClick={toggleMenu} onKeyDown={toggleMenu} role="presentation">
            <span className="material-symbols-outlined close-menu">close</span>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link' : 'none')} onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link' : 'none')} onClick={toggleMenu}>About</NavLink>
          </li>
          <li>
            <NavLink to="/skill" className={({ isActive }) => (isActive ? 'nav-link' : 'none')} onClick={toggleMenu}>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link' : 'none')} onClick={toggleMenu}>Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="hamburger-menu" onClick={toggleMenu} onKeyDown={toggleMenu} role="presentation">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </div>
  );
};

export default Navigation;
