import ColumnList from 'components/ColumnList';
import Input from 'components/Input';
import Modal from 'components/Modal';
import React, { useState } from 'react';
import styled from 'styled-components';
import Register from 'components/Register';
import ButtonIcon from 'components/ButtonIcon';
import { newGuid } from 'utils/guid';
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
   const [showModal, setShowModal] = useState(true);
   const [userName, setUserName] = useState('');

   const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
   };

   const handleToggleModal = () => {
      setShowModal((prev) => !prev);
   };

   const handleAddColumnItem = () => {
      const newItem: any = {
         id: newGuid(),
         title: 'Column name',
         author: userName,
         cards: [],
      };
      setColumnData((prevState) => [newItem, ...prevState]);
   };

   const handleDeleteColumnItem = (id: number) => {
      setColumnData((prevState) => prevState.filter((column) => column.id !== id));
   };

   const handleKeyModal = (e: React.KeyboardEvent) => {
      if (e.code === 'Enter') {
         handleToggleModal();
      }
   };

   return (
      <AppWrapper>
         <ColumnList
            columnData={columnData}
            setColumnData={setColumnData}
            onDeleteColumn={handleDeleteColumnItem}
            addItemColumn={handleAddColumnItem}
         />
         <Modal showModal={showModal}>
            <Register>
               <Input onKeyDown={handleKeyModal} outline="1px solid #EEEEEE" placeholder="Введите ваше имя" value={userName} onChange={handleName} />
               <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={handleToggleModal} typeIcon="Close" />
            </Register>
         </Modal>
      </AppWrapper>
   );
};
