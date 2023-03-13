import React, { useState } from 'react';
import { HeaderBox, HeaderWraper } from './Header.styled';
import { Container } from 'components/Container';
import Logo from 'components/Logo/Logo';
import Navigation from './Navigation/Navigation';
import BurgerBtn from './BurgerBtn/BurgerBtn';
import BurgerMenu from './BurgerMenu/BurgerMenu';

export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handTogleBurger = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <HeaderBox>
      <Container>
        <HeaderWraper>
          <Logo />
          {!burgerMenu && (
            <Navigation burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
          )}
          <BurgerBtn onClick={handTogleBurger} isOpen={burgerMenu} />
          {burgerMenu && (
            <BurgerMenu setBurgerMenu={setBurgerMenu} burgerMenu={burgerMenu} />
          )}
        </HeaderWraper>
      </Container>
    </HeaderBox>
  );
}
