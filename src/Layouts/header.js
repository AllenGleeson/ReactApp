import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import '../assets/css/nav.css';
import logo from '../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Navbar expand="lg" className='bg-nav border-bottom' id='nav'>
      <Navbar.Toggle
        onClick={toggleCollapse}
        aria-controls="navbarTogglerDemo03"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      />
      <Navbar.Brand href="/">
        <img id="logo" src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Collapse in={!isCollapsed}>
        <Nav className="mr-auto">
          <NavItem>
            <NavLink className="m-md-0 mb-sm-0 nav-link text-center" href="/">
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
      </Navbar.Collapse>
      <button className='light-dark-toggler me-2 rounded-circle' onClick={toggleDarkMode}>
          <FontAwesomeIcon className='mt-1' icon={isDarkMode ? faSun : faMoon} />
        </button>
    </Navbar>
  );
};

export default Header;
