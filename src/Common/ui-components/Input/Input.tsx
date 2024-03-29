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
  register?: any;
  error?: any;
  optionsForm?: { [key: string]: unknown };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({ placeholder, name, type, value, onChange, register, optionsForm, error, ...props }) => {
  return (
    <S.InnerInput>
      <S.Input {...register(name, optionsForm)} placeholder={placeholder} name={name} type={type} value={value} onChange={onChange} {...props} />
      {error?.[name] && <S.Error>{error?.[name]?.message && error?.[name]?.message}</S.Error>}
    </S.InnerInput>
  );
};
