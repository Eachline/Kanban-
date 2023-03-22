import React from 'react';
import { Button } from 'Common/ui-components';
import { ColumnItem } from 'Features';
import * as S from './StyleColumnList';
import { useAppSelector } from 'Common/hook/useAppSelector';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { addColumn } from 'store/duck/Column-Slice';

export const ColumnList: React.FC = () => {
  const columnList = useAppSelector((state) => state.column);
  const userName = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  console.log(columnList);

  return (
    <S.Column>
      <Button onClick={() => dispatch(addColumn({ username: userName.userName }))} width="100%">
        Добавить колонку
      </Button>
      {columnList && columnList.map((column) => <ColumnItem key={column.id} columnData={column} />)}
    </S.Column>
  );
};
