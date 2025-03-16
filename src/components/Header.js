import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <span>L-MANGÁS</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mangas">Mangás</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;