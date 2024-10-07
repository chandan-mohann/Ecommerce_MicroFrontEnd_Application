import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <h1>E-Commerce Store</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
