import React from 'react';
import { BtnStandart } from './Button.styled';

export default function Button({ title, onClick }) {
  return <BtnStandart onClick={onClick}>{title}</BtnStandart>;
}
