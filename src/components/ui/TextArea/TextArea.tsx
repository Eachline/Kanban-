import React, { ChangeEvent } from 'react';
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
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

export const TextArea: React.FC<ITextArea> = ({ placeholder, children, name, value, onChange, onKeyDown, ...rest }) => {
  return (
    <S.TextArea onKeyDown={onKeyDown} value={value} placeholder={placeholder} name={name} onChange={onChange} {...rest}>
      {children}
    </S.TextArea>
  );
};
