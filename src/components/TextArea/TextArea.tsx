import React from 'react';
import * as S from './StyleTextArea';

export interface ITextArea {
  width?: string;
  height?: string;
  outline?: string;
  border?: string;
  placeholder?: string;
  name?: string;
  children?: React.ReactNode;
  value?: string;
  onChange?: (e: any) => void;
}

export const TextArea: React.FC<ITextArea> = ({ placeholder, children, name, value, onChange, ...rest }) => {
  return (
    <S.TextArea value={value} placeholder={placeholder} name={name} onChange={onChange} {...rest}>
      {children}
    </S.TextArea>
  );
};
