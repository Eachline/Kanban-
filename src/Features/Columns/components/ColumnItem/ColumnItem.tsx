import React from 'react';
import { ButtonIcon } from 'Common/ui-components';
import { CardList } from 'Features';
import Form from '../Form';
import * as S from './StyleColumn';
import { IColumnItemProps } from 'Features/types/columnItemProps';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { removeColumn, toggleColumn } from 'store/duck/Column-Slice';

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
