import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const NavbarItem = styled.li`
  margin-right: 10px;
`;

const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarList>
        <NavbarItem>
          <NavbarLink href="/">Accueil</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/about">À propos</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/portfolio">Portfolio</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="/contact">Contact</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
};

export default Navbar;
