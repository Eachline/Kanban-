import React from 'react';
import ButtonIcon from 'components/ui/ButtonIcon';
import CardList from 'components/Card/CardList';
import Form from './Form';
import * as S from './StyleColumn';
import { IColumnItem } from 'types/column/columnItem';
import { useAppDispatch } from 'hook/useAppDispatch';
import { removeColumn, toggleColumn } from 'features/Column-Slice';

export const ColumnItem: React.FC<IColumnItem> = ({ columnData }) => {
  const dispatch = useAppDispatch();

  return (
    <S.ColumnItem>
      <S.ColumnInner>
        {columnData.edit ? (
          <Form columnData={columnData} />
        ) : (
          <S.HeaderColumn>
            <S.ColumnItem onDoubleClick={() => dispatch(toggleColumn({ id: columnData.id }))}>{columnData.title}</S.ColumnItem>
            <ButtonIcon
              onClick={() => dispatch(removeColumn({ id: columnData.id }))}
              padding="7px"
              background="transparent"
              border="transparent"
              typeIcon="Close"
            />
          </S.HeaderColumn>
        )}
      </S.ColumnInner>
      <CardList columnData={columnData} />
    </S.ColumnItem>
  );
};
