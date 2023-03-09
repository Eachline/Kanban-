import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon';
import CardList from 'components/CardList';
import Input from 'components/Input';

import * as S from './StyleColumn';

export const ColumnItem: React.FC<any> = ({
  columnData,
  onDeleteColumn,
  editColumn,
  addCard,
  onDeleteCard,
  editCard,
  addComment,
  onDeleteComment,
}) => {
  const [columnTitle, setColumnTitle] = useState(columnData.title);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnTitle(e.target.value);
  };

  const handleSubmitEditTitle = (e: React.ChangeEvent) => {
    e.preventDefault();
  };

  return (
    <S.ColumnItem>
      <S.ColumnInner>
        {columnData.edit ? (
          <S.EditForm onSubmit={handleSubmitEditTitle}>
            <Input value={columnTitle} onChange={handleChangeTitle} />
            <ButtonIcon onClick={() => editColumn(columnData.id, columnTitle)} typeIcon="Close" />
          </S.EditForm>
        ) : (
          <S.HeaderColumn>
            <S.ColumnItem onDoubleClick={() => editColumn(columnData.id)}>{columnTitle}</S.ColumnItem>
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
      />
    </S.ColumnItem>
  );
};
