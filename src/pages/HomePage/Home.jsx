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
    setIsModalOpen(false);
  };

  const handleKeyModalClose = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
      document.querySelector('body').classList.remove('modal');
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      document.querySelector('body').classList.remove('modal');
    }
  };

  return (
    <>
      <Container>
        <HeroBox>
          <HeroTitle>Virtual Reality Business Solutions</HeroTitle>
          <HeroDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nuncoe scelerisque in.
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
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}
