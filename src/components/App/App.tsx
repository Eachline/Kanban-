import React, { useState } from 'react';
import Input from 'components/ui/Input';
import Modal from 'components/ui/Modal';
import ButtonIcon from 'components/ui/ButtonIcon';
import ColumnList from 'components/Column/ColumnList';
import * as S from './StyleApp';
import { useKeyDown } from 'hook/useKeyDown';
import { useForm } from 'react-hook-form';
export const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(!localStorage.getItem('persist:column') ? true : false);
  const [userName, setUserName] = useState('');
  const { register } = useForm();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleKeyModal = (e: any) => {
    if (e.code === 'Enter' || e.code === 'Escape') {
      handleCloseModal();
    }
  };

  useKeyDown(handleKeyModal);

  return (
    <S.Container>
      <ColumnList />
      <Modal showModal={showModal} onClick={handleCloseModal}>
        <S.Register>
          <Input
            register={register}
            name="username"
            outline="1px solid #EEEEEE"
            placeholder="Введите ваше имя"
            value={userName}
            onChange={handleName}
          />
          <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={handleCloseModal} typeIcon="Close" />
        </S.Register>
      </Modal>
    </S.Container>
  );
};
