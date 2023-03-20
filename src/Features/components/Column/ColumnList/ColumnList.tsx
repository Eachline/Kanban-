import React from 'react';
import { Button } from 'Common/components';
import { ColumnItem } from 'Features/components';
import * as S from './StyleColumnList';
import { useAppSelector } from 'Common/hook/useAppSelector';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { addColumn } from 'Features/duck/Column-Slice';

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
