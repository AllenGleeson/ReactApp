import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content row">
        <p className="footer-text col-3">© 2023 Your Company. All rights reserved.</p>
        <ul className="footer-links col-3 offset-6">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
