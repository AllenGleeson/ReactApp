import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className='mt-4'>
      <div className='container'>
        <div className="footer-content pt-3 row">
          <ul className="col-md-4 col-sm-6 footer-links offset-md-8">
            <li className='nav-link p-1'><a href='/'>HOME</a></li>
            <li className='ms-3 nav-link p-1'><a href='/projects'>PROJECTS</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
