import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem, NavLink } from 'react-bootstrap';
import '../assets/css/nav.css';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Navbar expand="lg" className='bg-nav'>
        <Navbar.Toggle onClick={toggleCollapse} aria-controls="navbarTogglerDemo03" aria-expanded={!isCollapsed} aria-label="Toggle navigation" />
        <Navbar.Collapse in={!isCollapsed}>
            <Navbar.Brand href="/">
            <img id="logo" src="https://media.keyshot.com/uploads/2018/10/keyshot-icon-256.png" alt="logo" />
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
