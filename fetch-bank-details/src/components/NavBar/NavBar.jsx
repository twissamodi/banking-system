import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <header className="header-container">
      <h1 className="title">bankBazaar.com</h1>
      <nav className="navbar-content">
        <ul className="header-navbar-list">
          <li className="navbar-list-items">
            <a className="navbar-link" href="/">Home</a>
            <span className="navbar-links-separator">|</span>
          </li>
          <li className="navbar-list-items"><a className="navbar-link" href="/search-by-ifsc">Get bank details</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
