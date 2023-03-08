import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/ButtonIcon';
import Input from 'components/Input';

export interface IEditForm {
  onClick?: () => void;
  value?: string;
  id?: string;
  title?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledEditForm = styled.form<any>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EditForm: React.FC<IEditForm> = ({ value, onChange, onClick, id, title }) => {
  const handleSubmitEditForm = (e: React.ChangeEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <StyledEditForm onChange={handleSubmitEditForm}>
        <Input value={value} onChange={onChange} />
        <ButtonIcon onClick={onClick} typeIcon="Close" />
      </StyledEditForm>
    </div>
  );
};
