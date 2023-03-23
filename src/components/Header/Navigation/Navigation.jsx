import React from 'react';
import { NavigationStyled, NavStyled } from './Navigation.styled';
import NavLinks from '../NavLinks/NavLinks';
import Button from 'components/Button/Button';

export default function Navigation({
  setBurgerMenu,
  burgerMenu,
  handleModalOpen,
}) {
  return (
    <NavigationStyled>
      <NavStyled>
        <NavLinks setBurgerMenu={setBurgerMenu} burgerMenu={burgerMenu} />
      </NavStyled>
      <Button title={'Join Us'} onClick={handleModalOpen} />
    </NavigationStyled>
  );
}
