import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/ButtonIcon';
import CardList from 'components/CardList';
import Input from 'components/Input';
const StyleColumnItem = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 16px;
   height: max-content;
   padding: 16px 16px 16px 16px;
   max-width: 324px;
   border-radius: 10px;
   background-color: #f5f8fa;
`;

const StyledColumnInner = styled.div`
   padding: 0px 5px 0px 5px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const ColumnItem: React.FC<any> = ({ columnData, onDeleteColumn }) => {
   const { author } = columnData;

   return (
      <StyleColumnItem>
         <StyledColumnInner>
            <Input value={columnData.title} />
            <ButtonIcon onClick={() => onDeleteColumn(columnData.id)} padding="7px" background="transparent" border="transparent" typeIcon="Close" />
         </StyledColumnInner>
         <CardList columnData={columnData} author={author} />
      </StyleColumnItem>
   );
};
