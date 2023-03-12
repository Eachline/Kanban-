import React from 'react';
import Button from 'components/ui/Button';
import ColumnItem from 'components/Column/ColumnItem';
import * as S from './StyleColumnList';
import { IColumnList } from 'types/column/columnList';

export const ColumnList: React.FC<IColumnList> = ({
  columnData,
  addColumn,
  onDeleteColumn,
  editColumn,
  addCard,
  onDeleteCard,
  editCard,
  addComment,
  onDeleteComment,
  editComment,
}) => {
  return (
    <S.Column>
      <Button onClick={() => addColumn()} width="100%">
        Добавить колонку
      </Button>
      {columnData &&
        columnData.map((column) => (
          <ColumnItem
            key={column.id}
            columnData={column}
            onDeleteColumn={onDeleteColumn}
            editColumn={editColumn}
            addCard={addCard}
            onDeleteCard={onDeleteCard}
            editCard={editCard}
            addComment={addComment}
            onDeleteComment={onDeleteComment}
            editComment={editComment}
          />
        ))}
    </S.Column>
  );
};
