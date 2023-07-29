import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className='mt-4'>
      <div className='container'>
        <div className="footer-content pt-3 row">
          <p className="footer-text col-3">© 2023 Your Company. All rights reserved.</p>
          <ul className="col-4 footer-links offset-5">
            <li className='tag'><a to="#">HOME</a></li>
            <li className='tag'><a to="#">PROJECTS</a></li>
            <li className='tag'><a to="#">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
