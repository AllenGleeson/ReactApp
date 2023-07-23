import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className='mt-4'>
      <div className='container'>
        <div className="footer-content pt-3 row">
          <p className="footer-text col-3">© 2023 Your Company. All rights reserved.</p>
          <ul className="footer-links col-3 offset-6">
            <li className='tag'><a to="#">Home</a></li>
            <li className='tag'><a to="#">About</a></li>
            <li className='tag'><a to="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
