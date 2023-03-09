import React from 'react';
import ButtonIcon from 'components/ButtonIcon';
import Input from 'components/Input';
import * as S from './StyleEditForm';

export const EditForm: React.FC = ({ value, onChange, onClick }: any) => {
  const handleSubmitEditForm = (e: React.ChangeEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <S.EditForm onChange={handleSubmitEditForm}>
        <Input value={value} onChange={onChange} />
        <ButtonIcon onClick={onClick} typeIcon="Close" />
      </S.EditForm>
    </div>
  );
};
