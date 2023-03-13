import React from 'react';
import { NavLinkStyled, NavStyled } from './NavLinks.styled';

export default function NavLinks({ setBurgerMenu, burgerMenu }) {
  return (
    <>
      <NavStyled>
        <NavLinkStyled
          to="/"
          onClick={() => {
            setBurgerMenu(false);
          }}
        >
          Home
        </NavLinkStyled>

        <NavLinkStyled
          to="/about-us"
          onClick={() => {
            setBurgerMenu(false);
          }}
        >
          About Us
        </NavLinkStyled>
        <NavLinkStyled
          to="/service"
          onClick={() => {
            setBurgerMenu(false);
          }}
        >
          Service
        </NavLinkStyled>
        <NavLinkStyled
          to="/contacts"
          onClick={() => {
            setBurgerMenu(false);
          }}
        >
          Contacts
        </NavLinkStyled>
      </NavStyled>
    </>
  );
}
