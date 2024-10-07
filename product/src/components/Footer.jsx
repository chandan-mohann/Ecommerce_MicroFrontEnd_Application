import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
    </footer>
  );
};
