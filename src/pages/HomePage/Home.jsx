import React, { useEffect, useState } from 'react';
import { Container } from 'components/Container';
import {
  BtnBox,
  BtnVideo,
  HeroBox,
  HeroDescription,
  HeroTitle,
} from './Home.styled';
import Button from 'components/Button/Button';
import { BsPlayCircle } from 'react-icons/bs';
import ModalJoin from 'components/ModalJoin/ModalJoin';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      setIsModalClosing(false);
    } else {
      setIsModalClosing(true);
    }
  }, [isModalOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyModalClose);
    return () => {
      document.removeEventListener('keydown', handleKeyModalClose);
    };
  });

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

  return (
    <>
      <Container>
        <HeroBox>
          <HeroTitle>Virtual Reality Business Solutions</HeroTitle>
          <HeroDescription>
            15 year experience in business consulting arena and artificial
            intelligence. Quisque aliquam posuere tortor, sit amet convallis
            nuncoe scelerisque in.
          </HeroDescription>
          <BtnBox>
            <Button title={'Join Us'} onClick={handleModalOpen} />
            <BtnVideo
              href={'https://www.youtube.com/watch?v=ybyib5pAq7Y'}
              target={'_blank'}
            >
              <BsPlayCircle />
              <p>Watch video</p>
            </BtnVideo>
          </BtnBox>
        </HeroBox>
      </Container>
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
