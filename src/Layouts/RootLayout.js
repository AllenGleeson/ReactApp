import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { NavLink , Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import '../css/nav.css';


export default function RootLayout(){
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='root-layout'>
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle onClick={toggleCollapse} aria-controls="navbarTogglerDemo03" aria-expanded={!isCollapsed} aria-label="Toggle navigation" />
            <Navbar.Collapse in={!isCollapsed}>
                <Navbar.Brand href="/">
                <img id="logo" src="https://media.keyshot.com/uploads/2018/10/keyshot-icon-256.png" alt="logo" />
                </Navbar.Brand>
                <Nav className="mr-auto">
                <NavItem>
                    <NavLink className="nav-link text-center active" aria-current="page" to="/shop">
                    SHOP
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link text-center" to="/about">
                    ABOUT
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link text-center" to="/">
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

        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
    
  );
};
