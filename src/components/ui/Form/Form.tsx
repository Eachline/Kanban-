import React, { useState } from 'react';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import ButtonIcon from 'components/ui/ButtonIcon';
import * as S from './StyleForm';

export interface IFormProps {
  title: string;
  columnIndex: string;
  onClick: (id: string, title: string, description: string) => void;
  onClose: () => void;
}

export const Form: React.FC<IFormProps> = ({ onClick, onClose, title, columnIndex }) => {
  const [textFieldValue, setTextFieldValue] = useState({ title: '', description: '' });

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onClose();
  };

  return (
    <S.Form onSubmit={handleSubmitForm}>
      <S.HeaderForm>
        <S.HeaderTitle>{title}</S.HeaderTitle>
        <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={onClose} typeIcon="Close" />
      </S.HeaderForm>
      <S.FieldList>
        <Input value={textFieldValue.title} name="title" onChange={handleFieldChange} outline="1px solid #000" placeholder="Название карточки" />
        <Input
          value={textFieldValue.description}
          name="description"
          onChange={handleFieldChange}
          outline="1px solid #000"
          placeholder="Описание карточки"
        />
      </S.FieldList>
      <S.ButtonList>
        <Button type="submit" onClick={onClose} background="#FF0000" color="#fff" hover="#aa1f1f">
          Cancel
        </Button>
        <Button
          type="submit"
          onClick={() => onClick(columnIndex, textFieldValue.title, textFieldValue.description)}
          background="#008000"
          color="#fff"
          hover="#046804">
          Add Card
        </Button>
      </S.ButtonList>
    </S.Form>
  );
};
