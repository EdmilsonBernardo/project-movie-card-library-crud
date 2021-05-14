import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import '../App.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar id="header" expand="md">
        <NavbarBrand href="/" id="title-app">Movie Library</NavbarBrand>
        <NavbarToggler onClick={ toggle } />
        <Collapse isOpen={ isOpen } navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                href="https://github.com/EdmilsonBernardo/project-movie-card-library-crud"
                className="navbar-link"
                target="_blank"
              >
                See on gitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
