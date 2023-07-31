import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className='mt-4'>
      <div className='container'>
        <div className="footer-content pt-3 row">
          <ul className="col-4 footer-links offset-8">
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
