import styled from 'styled-components';

export interface IStyledInput {
  outline?: string;
  color?: string;
  background?: string;
}

export const Input: any = styled.input<IStyledInput>`
  display: block;
  outline: ${(props) => props.outline || 'transparent'};
  border: none;
  width: 100%;
  padding: 7px 7px 7px 7px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.background || props.theme.colors.dark};
  border-radius: 3px;
  background: ${(props) => props.background || 'white'};
  &:focus {
    outline: 2px solid #${(props) => props.outline || 'white'};
  }
`;

export const InnerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 12px;
`;

export const Error = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: red;
`;
