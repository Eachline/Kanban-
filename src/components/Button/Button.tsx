import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { StyledButton } from './StyleButton';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  justify?: string;
  props?: string[];
  width?: string;
  color?: string;
  background?: string;
  border?: string;
  padding?: string;
  hover?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
  typeButton?: ButtonType;
  onClick?: (event: React.MouseEvent) => void;
}

export const Button: React.FC<IButtonProps> = ({ className, children, isDisabled, typeButton, onClick, ...props }) => {
  return (
    <StyledButton className={className} onClick={onClick} disabled={isDisabled} type={typeButton} {...props}>
      {children}
    </StyledButton>
  );
};
