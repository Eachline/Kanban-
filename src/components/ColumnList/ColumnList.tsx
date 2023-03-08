import Button from 'components/Button';
import ColumnItem from 'components/ColumnItem';
import React from 'react';
import { StyleColumn } from './StyleColumnList';
import { newGuid } from 'utils/guid';

export const ColumnList: React.FC<any> = ({ columnData, setColumnData, userName }: any) => {
  const handleAddColumnItem = () => {
    const newItem: any = {
      id: newGuid(),
      title: 'Column name',
      author: userName,
      edit: false,
      cards: [],
    };
    setColumnData((prevState: any) => [newItem, ...prevState]);
  };

  const handleDeleteColumnItem = (id: number) => {
    setColumnData((prevState: any) => prevState.filter((column: any) => column.id !== id));
  };

  const handleEditColumnTitle = (id: number, title: string) => {
    setColumnData((prevState: any) =>
      prevState.map((columnEdit: any) => (columnEdit.id === id ? { ...columnEdit, title, edit: !columnEdit.edit } : columnEdit)),
    );
  };

  return (
    <StyleColumn>
      <Button onClick={() => handleAddColumnItem()} width="100%">
        Добавить колонку
      </Button>
      {columnData &&
        columnData.map((column: any) => (
          <ColumnItem
            key={column.id}
            columnData={column}
            setColumnData={setColumnData}
            onDeleteColumn={handleDeleteColumnItem}
            onEditTitleColumn={handleEditColumnTitle}
          />
        ))}
    </StyleColumn>
  );
};
