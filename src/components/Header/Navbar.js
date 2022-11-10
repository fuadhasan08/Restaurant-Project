import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const HeaderNav = () => {
  return (
    <Navbar dark color='dark'>
      <NavbarBrand href='/'>Restaurant</NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink active href='/'>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default HeaderNav
