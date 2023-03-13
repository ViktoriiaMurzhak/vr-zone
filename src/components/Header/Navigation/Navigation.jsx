import React from 'react';
import { NavigationStyled, NavStyled } from './Navigation.styled';
import NavLinks from '../NavLinks/NavLinks';

export default function Navigation({ setBurgerMenu, burgerMenu }) {
  return (
    <NavigationStyled>
      <NavStyled>
        <NavLinks setBurgerMenu={setBurgerMenu} burgerMenu={burgerMenu} />
      </NavStyled>
    </NavigationStyled>
  );
}
