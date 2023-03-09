import React from 'react';
import * as S from './StyleRegister';

export interface IStyledRegister {
  children?: React.ReactNode;
}

export const Register: React.FC<IStyledRegister> = ({ children }) => {
  return <S.Register>{children}</S.Register>;
};
