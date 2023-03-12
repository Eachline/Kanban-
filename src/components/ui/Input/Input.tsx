import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import * as S from './StyleInput';

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  outline?: string;
  color?: string;
  background?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({ placeholder, name, type, value, onChange, ...props }) => {
  return <S.Input placeholder={placeholder} name={name} type={type} value={value} onChange={onChange} {...props} />;
};
