import React from 'react';
import { TCard } from 'types/initialState';
import Input from 'components/ui/Input';
import TextArea from 'components/ui/TextArea';
import Button from 'components/ui/Button';
import * as S from './StyleForm';

export interface IForm {}

export interface ICardForm {
  valueArea: string;
  valueInput: string;
  card: TCard;
  columnIndex: string;
  onClick: (id: string, columnId: string, column: TCard) => void;
  onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeArea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Form: React.FC<ICardForm> = ({ onSubmit, valueInput, valueArea, onChangeInput, onChangeArea, onClick, columnIndex, card }) => {
  return (
    <S.CardForm onSubmit={onSubmit}>
      <Input outline="1px solid #000" value={valueInput} onChange={onChangeInput} />
      <TextArea height="130px" outline="1px solid #000" value={valueArea} onChange={onChangeArea} />
      <Button onClick={() => onClick(columnIndex, card.id, card)}>Изменить</Button>
    </S.CardForm>
  );
};
