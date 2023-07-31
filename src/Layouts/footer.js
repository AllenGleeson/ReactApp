import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className='mt-4'>
      <div className='container'>
        <div className="footer-content pt-3 row">
          <ul className="col-4 footer-links offset-8">
            <li className='tag border border-2 border-light'><a href='/'>HOME</a></li>
            <li className='tag border border-2 border-light'><a href='/projects'>PROJECTS</a></li>
            <li className='tag border border-2 border-light'><a href='/contact'>CONTACT</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
