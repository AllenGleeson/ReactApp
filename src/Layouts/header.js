import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem, NavLink, NavDropdown } from 'react-bootstrap';
import '../assets/css/nav.css';

const Greeting = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle onClick={toggleCollapse} aria-controls="navbarTogglerDemo03" aria-expanded={!isCollapsed} aria-label="Toggle navigation" />
      <Navbar.Collapse in={!isCollapsed}>
        <Navbar.Brand href="#">
          <img id="logo" src="https://media.keyshot.com/uploads/2018/10/keyshot-icon-256.png" alt="logo" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavItem>
            <NavLink className="nav-link text-center active" aria-current="page" href="/about">
              SHOP
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link text-center" href="/about">
              ABOUT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link text-center" href="/content">
              CONTACT
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
      <Nav className="ml-auto">
        <NavDropdown title="My Account" id="user-options">
          <NavDropdown.Item href="#">Register</NavDropdown.Item>
          <NavDropdown.Item href="#">Login</NavDropdown.Item>
        </NavDropdown>
        <NavItem>
          <NavLink className="text-info font-weight-bold text-black nav-link" href="#">
            <div className="text-center">
              <i className="fas fa-shopping-bag fa-lg"></i>
              <p className="my-0">€0.00</p>
            </div>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Greeting;
