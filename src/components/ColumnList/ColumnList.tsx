import Button from 'components/Button';
import ColumnItem from 'components/ColumnItem';
import React from 'react';
import styled from 'styled-components';

const StyleColumn = styled.div`
   padding: 70px 0px 0px 0px;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 30px;
`;

export const ColumnList: React.FC<any> = ({ columnData, onDeleteColumn, addItemColumn, setColumnData }: any) => {
   return (
      <StyleColumn>
         <Button onClick={() => addItemColumn()} width="100%">
            Добавить колонку
         </Button>
         {columnData &&
            columnData.map((column: any) => (
               <ColumnItem key={column.id} columnData={column} setColumnData={setColumnData} onDeleteColumn={onDeleteColumn} />
            ))}
      </StyleColumn>
   );
};
