import React from 'react';
import Button from 'components/ui/Button';
import ColumnItem from 'components/Column/ColumnItem';
import * as S from './StyleColumnList';
import { useAppSelector } from 'hook/useAppSelector';
import { useAppDispatch } from 'hook/useAppDispatch';
import { addColumn } from 'features/Column-Slice';

export const ColumnList: React.FC = () => {
  const columnList = useAppSelector((state) => state.column);
  const dispatch = useAppDispatch();

  return (
    <S.Column>
      <Button onClick={() => dispatch(addColumn())} width="100%">
        Добавить колонку
      </Button>
      {columnList && columnList.map((column) => <ColumnItem key={column.id} columnData={column} />)}
    </S.Column>
  );
};
