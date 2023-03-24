import React, { useEffect, useState } from 'react';
import { HeaderBox, HeaderWraper } from './Header.styled';
import { Container } from 'components/Container';
import Logo from 'components/Logo/Logo';
import Navigation from './Navigation/Navigation';
import BurgerBtn from './BurgerBtn/BurgerBtn';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import ModalJoin from 'components/ModalJoin/ModalJoin';

export default function Header() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsModalClosing(false);
    } else {
      setIsModalClosing(true);
    }
  }, [isModalOpen]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsModalClosing(false);
    }, 300);
  };

  const handleKeyModalClose = e => {
    if (e.code === 'Escape') {
      setIsModalClosing(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsModalClosing(false);
      }, 300);
      document.querySelector('body').classList.remove('modal');
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      setIsModalClosing(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsModalClosing(false);
      }, 300);
      document.querySelector('body').classList.remove('modal');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyModalClose);
    return () => {
      document.removeEventListener('keydown', handleKeyModalClose);
    };
  });

  const handTogleBurger = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <>
      <HeaderBox>
        <Container>
          <HeaderWraper>
            <Logo />
            {!burgerMenu && (
              <Navigation
                burgerMenu={burgerMenu}
                setBurgerMenu={setBurgerMenu}
                handleModalOpen={handleModalOpen}
              />
            )}
            <BurgerBtn onClick={handTogleBurger} isOpen={burgerMenu} />
            {burgerMenu && (
              <BurgerMenu
                setBurgerMenu={setBurgerMenu}
                burgerMenu={burgerMenu}
              />
            )}
          </HeaderWraper>
        </Container>
      </HeaderBox>
      {isModalOpen === true && (
        <ModalJoin
          handleModalClose={handleModalClose}
          title="Join us! Subscribe to the newsletter!"
          handleBackdropClose={handleBackdropClose}
          isModalClosing={isModalClosing}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
