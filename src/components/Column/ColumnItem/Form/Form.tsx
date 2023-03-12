import React from 'react';
import { TColumn } from 'types/initialState';
import * as S from './StyleForm';
import Input from 'components/ui/Input';
import ButtonIcon from 'components/ui/ButtonIcon';

export interface IColumnForm {
  onSubmit: (e: React.ChangeEvent) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (id: string, column: TColumn) => void;
  columnId: string;
  column: TColumn;
}

export const Form: React.FC<IColumnForm> = ({ onSubmit, value, onChange, onClick, columnId, column }) => {
  return (
    <S.EditForm onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} />
      <ButtonIcon onClick={() => onClick(columnId, column)} typeIcon="Edit" />
    </S.EditForm>
  );
};
