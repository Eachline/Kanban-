import React, { useState } from 'react';
import ButtonIcon from 'components/ButtonIcon';
import CardList from 'components/CardList';
import Input from 'components/Input';

import { StyleColumnItem, StyledColumnInner, StyledColumnItem, StyledEditForm, StyledHeaderColumn } from './StyleColumn';

export const ColumnItem: React.FC<any> = ({ columnData, setColumnData, onDeleteColumn, onEditTitleColumn }) => {
  const { author } = columnData;
  const [columnTitle, setColumnTitle] = useState(columnData.title);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnTitle(e.target.value);
  };

  const handleSubmitEditTitle = (e: React.ChangeEvent) => {
    e.preventDefault();
  };

  return (
    <StyleColumnItem>
      <StyledColumnInner>
        {columnData.edit ? (
          <StyledEditForm onSubmit={handleSubmitEditTitle}>
            <Input value={columnTitle} onChange={handleChangeTitle} />
            <ButtonIcon onClick={() => onEditTitleColumn(columnData.id, columnTitle)} typeIcon="Close" />
          </StyledEditForm>
        ) : (
          <StyledHeaderColumn>
            <StyledColumnItem onDoubleClick={() => onEditTitleColumn(columnData.id)}>{columnTitle}</StyledColumnItem>
            <ButtonIcon onClick={() => onDeleteColumn(columnData.id)} padding="7px" background="transparent" border="transparent" typeIcon="Close" />
          </StyledHeaderColumn>
        )}
      </StyledColumnInner>
      <CardList columnData={columnData} setColumnData={setColumnData} author={author} />
    </StyleColumnItem>
  );
};
