import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import * as S from './StyleInput';

export interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  outline?: string;
  color?: string;
  background?: string;
  placeholder?: string;
  name: string;
  type?: string;
  value?: string;
  register: any;
  optionsForm?: { [key: string]: string };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({ placeholder, name, type, value, onChange, register, optionsForm, ...props }) => {
  return <S.Input {...register(name, optionsForm)} placeholder={placeholder} name={name} type={type} value={value} onChange={onChange} {...props} />;
};
