import Button from 'components/Button';
import ColumnItem from 'components/ColumnItem';
import React from 'react';
import * as S from './StyleColumnList';

export const ColumnList: React.FC<any> = ({
  columnData,
  addColumn,
  onDeleteColumn,
  editColumn,
  addCard,
  onDeleteCard,
  editCard,
  addComment,
  onDeleteComment,
}) => {
  return (
    <S.Column>
      <Button onClick={() => addColumn()} width="100%">
        Добавить колонку
      </Button>
      {columnData &&
        columnData.map((column: any) => (
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
          />
        ))}
    </S.Column>
  );
};
