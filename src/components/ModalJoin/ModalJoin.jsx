import React, { useState } from 'react';
import {
  Backdrop,
  Input,
  InputBox,
  ModalBox,
  ModalCLoseBtn,
  ModalTitle,
} from './ModalJoin.styled';
import { GrClose } from 'react-icons/gr';
import { FaTelegramPlane } from 'react-icons/fa';
import { BtnSubscribe } from 'components/Team/Subscribe/Subscribe.styled';
import { toast } from 'react-toastify';

export default function ModalJoin({
  title,
  handleModalClose,
  handleBackdropClose,
  setIsModalOpen,
  isModalClosing,
}) {
  const [email, setEmail] = useState('');

  const handleEmail = e => {
    setEmail(e.target.value.trim());
  };

  const handleSubscribe = () => {
    // eslint-disable-next-line
    let re = /^\w{1,}[\.-\w]*\w{1,}@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === '') {
      toast('Enter your email address');
    } else if (!re.test(String(email).toLocaleLowerCase())) {
      toast(
        'The email was entered incorrectly! Example of a validated email: name@gmail.com'
      );
    } else {
      setIsModalOpen(false);
      toast('Thanks for subscribing! Wait for letters to your email.');
      setEmail('');
    }
  };

  return (
    <Backdrop onClick={handleBackdropClose}>
      <ModalBox className={isModalClosing ? 'modal-leave' : 'show'}>
        <ModalCLoseBtn onClick={handleModalClose}>
          <GrClose />
        </ModalCLoseBtn>
        <ModalTitle>{title}</ModalTitle>
        <InputBox>
          <Input
            placeholder="Enter your email..."
            type="email"
            name="email"
            onChange={handleEmail}
            value={email}
            onBlur={handleEmail}
          />
          <BtnSubscribe onClick={handleSubscribe}>
            <FaTelegramPlane color="#FFFFFF" />
            Subscribe
          </BtnSubscribe>
        </InputBox>
      </ModalBox>
    </Backdrop>
  );
}
