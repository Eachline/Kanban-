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
  const [showEditColumn, setShowEditColumn] = useState(false);
  const [columnTitle, setColumnTitle] = useState(columnData.title);

  const handleEditColumn = () => {
    setShowEditColumn((prevState) => !prevState);
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnTitle(e.target.value);
  };

  const updateColumnTitle = (title: string) => {
    const newColumn = { ...columnData, title };
    editColumn(newColumn.id, newColumn);
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
            columnId={columnData.id}
            column={columnData}
          />
        ) : (
          <S.HeaderColumn>
            <S.ColumnItem onDoubleClick={handleEditColumn}>{columnTitle}</S.ColumnItem>
            <ButtonIcon onClick={() => onDeleteColumn(columnData.id)} padding="7px" background="transparent" border="transparent" typeIcon="Close" />
          </S.HeaderColumn>
        )}
      </S.ColumnInner>
      <CardList
        columnData={columnData}
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
