import React, {useState} from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const checkActive = (value) => {
    let rtnVal = "nav-link fw-bold";
    return value ? rtnVal : rtnVal+" unselected";
  }

  return (
    <header>
      <Navbar color="dark" dark expand={"md"}>
        <Link className='navbar-brand fw-bolder' to="/" >my.team</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto p-3" navbar>
            <NavItem>
            <NavLink exact className={isActive => checkActive(isActive)} to="/" >Üye Listesi</NavLink>
            </NavItem>
            <NavItem>
            <NavLink className={isActive => checkActive(isActive)} to="/ekle" >Üye Ekle</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  )
}

export default Header