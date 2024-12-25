import React, { useState } from 'react';
import './MainNavbar.css';
import img from '../img/logo.png';

const MainNavbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="midwidth navbar-flex">
        <img src={img} alt="Logo" className="logo-img" />
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><a href="#" onClick={() => setMenuActive(false)}>inicio</a></li>
          <li><a href="#" onClick={() => setMenuActive(false)}>sobre nós</a></li>
          <li><a href="#" onClick={() => setMenuActive(false)}>preços</a></li>
          <li><a href="#" onClick={() => setMenuActive(false)}>contato</a></li>
        </ul>
        <a href="#" className="booking">agendar consulta</a>
        <div
          className={`menu-toggle ${menuActive ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuActive}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`overlay ${menuActive ? 'active' : ''}`} onClick={toggleMenu}></div>
    </nav>
  );
};

export default MainNavbar;