import React from 'react';
import styled from 'styled-components';

export interface IStyledTextArea {
   width?: string;
   outline?: string;
   border?: string;
   height?: string;
}

const StyledTextArea = styled.textarea<IStyledTextArea>`
   padding: 15px 15px 15px 15px;
   width: ${(props) => props.width || '100%'};
   height: ${(props) => props.height || 'max-content'};
   outline: ${(props) => props.outline || 'transparent'};
   border: ${(props) => props.border || 'transparent'};
   background: #fff;
   resize: none;
   &:focus {
      outline: 1px solid ${(props) => props.outline || 'transparent'};
   }
`;

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
      <StyledTextArea value={value} placeholder={placeholder} name={name} onChange={onChange} {...rest}>
         {children}
      </StyledTextArea>
   );
};
