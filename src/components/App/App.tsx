import ColumnList from 'components/ColumnList';
import Input from 'components/Input';
import Modal from 'components/Modal';
import React, { useState } from 'react';
import styled from 'styled-components';
import Register from 'components/Register';
import ButtonIcon from 'components/ButtonIcon';

const AppWrapper = styled.div`
   width: 100%;
   max-width: 1440px;
   margin: 0 auto;
   height: 100%;
`;

export const App: React.FC = () => {
   const initialStateColumn = [
      {
         id: 1,
         title: 'TODO',
         author: 'Kehic',
         cards: [],
      },
      {
         id: 2,
         title: 'In Progress',
         author: 'Kehic',
         cards: [],
      },
      {
         id: 3,
         title: 'Testing',
         author: 'Kehic',
         cards: [],
      },
      {
         id: 4,
         title: 'Done',
         author: 'Kehic',
         cards: [],
      },
   ];
   const [columnData, setColumnData] = useState(initialStateColumn);

   return (
      <AppWrapper>
         <ColumnList />
         <Modal>
            <Register>
               <Input />
               <ButtonIcon typeIcon="Close" />
            </Register>
         </Modal>
      </AppWrapper>
   );
};
