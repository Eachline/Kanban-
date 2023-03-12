import React, { useState } from 'react';
import ButtonIcon from 'components/ui/ButtonIcon';
import CardList from 'components/Card/CardList';
import * as S from './StyleColumn';
import { IColumnItem } from 'types/column/columnItem';
import Form from './Form';

export const ColumnItem: React.FC<IColumnItem> = ({
  columnData,
  onDeleteColumn,
  editColumn,
  addCard,
  onDeleteCard,
  editCard,
  addComment,
  onDeleteComment,
  editComment,
}) => {
  const [column, setColumn] = useState({ ...columnData });
  const [showEditColumn, setShowEditColumn] = useState(false);
  const [columnTitle, setColumnTitle] = useState(column.title);

  const handleEditColumn = () => {
    setShowEditColumn((prevState) => !prevState);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnTitle(e.target.value);
  };

  const updateColumnTitle = (title: string) => {
    setColumn({ ...column, title: title });
  };

  const handleSubmitEditTitle = (e: React.ChangeEvent) => {
    e.preventDefault();
    updateColumnTitle(columnTitle);
    handleEditColumn();
  };

  return (
    <S.ColumnItem>
      <S.ColumnInner>
        {showEditColumn ? (
          <Form
            onSubmit={handleSubmitEditTitle}
            value={columnTitle}
            onChange={handleChangeTitle}
            onClick={editColumn}
            columnId={column.id}
            column={column}
          />
        ) : (
          <S.HeaderColumn>
            <S.ColumnItem onDoubleClick={handleEditColumn}>{columnTitle}</S.ColumnItem>
            <ButtonIcon onClick={() => onDeleteColumn(column.id)} padding="7px" background="transparent" border="transparent" typeIcon="Close" />
          </S.HeaderColumn>
        )}
      </S.ColumnInner>
      <CardList
        columnData={column}
        addCard={addCard}
        onDeleteCard={onDeleteCard}
        editCard={editCard}
        addComment={addComment}
        onDeleteComment={onDeleteComment}
        editComment={editComment}
      />
    </S.ColumnItem>
  );
};
