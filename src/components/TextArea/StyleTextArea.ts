import styled from 'styled-components';

export interface IStyledTextArea {
  width?: string;
  outline?: string;
  border?: string;
  height?: string;
}

export const TextArea = styled.textarea<IStyledTextArea>`
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
