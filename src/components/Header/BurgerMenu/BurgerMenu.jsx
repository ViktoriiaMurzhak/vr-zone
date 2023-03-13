import React from 'react';
import NavLinks from 'components/Header/NavLinks/NavLinks';
import { BurgerOverlay } from './BurgerMenu.styled';

export default function BurgerMenu({ burgerMenu, setBurgerMenu }) {
  return (
    <BurgerOverlay>
      <NavLinks burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
    </BurgerOverlay>
  );
}
