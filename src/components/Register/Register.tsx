import React from 'react';
import { StyledRegister } from './StyleRegister';

export interface IStyledRegister {
  children?: React.ReactNode;
}

export const Register: React.FC<IStyledRegister> = ({ children }) => {
  return <StyledRegister>{children}</StyledRegister>;
};
