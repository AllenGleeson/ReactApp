import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { NavLink , Outlet } from 'react-router-dom';
import Footer from './footer';
import '../assets/css/nav.css';

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
        </Navbar>

        <main className='container'>
            <Outlet />
        </main>
        <Footer />
    </div>
    
  );
};
