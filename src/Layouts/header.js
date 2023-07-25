import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import '../assets/css/nav.css';
import logo from '../assets/images/Logo.png';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Navbar expand="lg" className='bg-nav'>
        <Navbar.Toggle onClick={toggleCollapse} aria-controls="navbarTogglerDemo03" aria-expanded={!isCollapsed} aria-label="Toggle navigation" />
        <Navbar.Collapse in={!isCollapsed}>
            <Navbar.Brand href="/">
            <img id="logo" src={logo} alt="logo" />
            </Navbar.Brand>
            <Nav className="mr-auto">
            <NavItem className='tag'>
                <NavLink className="nav-link text-center active" aria-current="page" to="/shop">
                HOME
                </NavLink>
            </NavItem>
            <NavItem className='tag'>
                <NavLink className="nav-link text-center" to="/about">
                PROJECTS
                </NavLink>
            </NavItem>
            <NavItem className='tag'>
                <NavLink className="nav-link text-center" to="/">
                CONTACT
                </NavLink>
            </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
