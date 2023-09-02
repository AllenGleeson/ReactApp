import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import '../assets/css/nav.css';
import logoLight from '../assets/images/page-logo.png';
import logoDark from '../assets/images/page-logo-dark.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isDarkMode, toggleDarkMode }) => {

  return (
    <Navbar className='bg-nav border-bottom' id='nav'>
      <Navbar.Brand href="/">
      <img id="logo" src={isDarkMode ? logoDark : logoLight} alt="logo" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavItem>
          <NavLink className="m-md-0 mb-sm-0 nav-link p-2 text-center" href="/">
            HOME
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="mt-md-auto mt-sm-0 nav-link p-2 text-center"
            href="/projects"
          >
            PROJECTS
          </NavLink>
        </NavItem>
      </Nav>
      <button className='light-dark-toggler me-2 rounded-circle' onClick={toggleDarkMode}>
          <FontAwesomeIcon className='mt-1' icon={isDarkMode ? faSun : faMoon} />
        </button>
    </Navbar>
  );
};

export default Header;
