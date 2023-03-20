import React from 'react';
import { ButtonIcon } from 'Common/components';
import { CardList } from 'Features/components';
import Form from './Form';
import * as S from './StyleColumn';
import { IColumnItemProps } from 'Features/typings/columnItemProps';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { removeColumn, toggleColumn } from 'Features/duck/Column-Slice';

export const ColumnItem: React.FC<IColumnItemProps> = ({ columnData }) => {
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
