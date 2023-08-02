import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className='mt-4'>
      <div className='container'>
        <div className="footer-content pt-3 row">
          <ul className="col-md-4 col-sm-6 footer-links offset-md-8">
            <li className='tag'><a href='/'>HOME</a></li>
            <li className='tag'><a href='/projects'>PROJECTS</a></li>
            <li className='tag'><a href='/contact'>CONTACT</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
