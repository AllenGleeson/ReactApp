import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content row">
        <p className="footer-text col-3">© 2023 Your Company. All rights reserved.</p>
        <ul className="footer-links col-3 offset-6">
          <li><a to="#">Home</a></li>
          <li><a to="#">About</a></li>
          <li><a to="#">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
