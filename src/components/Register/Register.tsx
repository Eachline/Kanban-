import React from 'react';
import styled from 'styled-components';

export interface IStyledRegister {
   children?: React.ReactNode;
}

const StyledRegister = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 30px;
`;

export const Register: React.FC<IStyledRegister> = ({ children }) => {
   return <StyledRegister>{children}</StyledRegister>;
};
