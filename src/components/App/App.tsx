import React, { useState } from 'react';
import InitialStateColumn from 'api/column.api';
import Input from 'components/Input';
import Modal from 'components/Modal';
import Register from 'components/Register';
import ButtonIcon from 'components/ButtonIcon';
import ColumnList from 'components/ColumnList';

import { AppWrapper } from './StyleApp';

export const App: React.FC = () => {
  const [columnData, setColumnData] = useState(InitialStateColumn);
  const [showModal, setShowModal] = useState(true);
  const [userName, setUserName] = useState('');

  console.log(columnData);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleKeyModal = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleToggleModal();
    }
  };

  const editDataAuthor = () => {
    columnData.map((column) => (column.author = userName));
  };
  editDataAuthor();

  return (
    <AppWrapper>
      <ColumnList columnData={columnData} setColumnData={setColumnData} userName={userName} />
      <Modal showModal={showModal}>
        <Register>
          <Input onKeyDown={handleKeyModal} outline="1px solid #EEEEEE" placeholder="Введите ваше имя" value={userName} onChange={handleName} />
          <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={handleToggleModal} typeIcon="Close" />
        </Register>
      </Modal>
    </AppWrapper>
  );
};
