import styled from 'styled-components';

export interface IStyledButtonProps {
  justify?: string;
  padding?: string;
  width?: string;
  color?: string;
  background?: string;
  border?: 'string;';
  hover?: string;
}

export const StyledButton: any = styled.button<IStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: ${(props) => props.justify || 'center'};
  padding: ${(props) => props.padding || '10px 30px'};
  height: max-content;
  width: ${(props) => props.width || 'max-content'};
  color: ${(props) => props.color || props.theme.colors.dark};
  background-color: ${(props) => props.background || props.theme.colors.primary};
  border: 1px solid ${(props) => props.border || props.theme.colors.secondary};
  border-radius: 5px;
  outline: transparent;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hover || props.theme.colors.secondary};
  }
`;
