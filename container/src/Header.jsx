import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <h1>E-Commerce Store</h1>
      <nav>
      <ul>
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
    </header>
  );
};
