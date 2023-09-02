import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className='mt-4'>
      <div className='container'>
        <div className="footer-content pb-2 pt-3">
          <ul className="footer-links">
            <li className='nav-link p-1'><a href='/'>HOME</a></li>
            <li className='ms-3 nav-link p-1'><a href='/projects'>PROJECTS</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
