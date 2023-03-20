import React, { useState } from 'react';
import Input from 'components/ui/Input';
import Modal from 'components/ui/Modal';
import ButtonIcon from 'components/ui/ButtonIcon';
import ColumnList from 'components/Column/ColumnList';
import * as S from './StyleApp';
import { useKeyDown } from 'hook/useKeyDown';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'hook/useAppDispatch';
import { addAuthor } from 'features/Column-Slice';
export const App: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(!localStorage.getItem('persist:column') ? true : false);

  const { register, handleSubmit, reset } = useForm({
    shouldUnregister: true,
    defaultValues: { username: '' },
  });

  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleKeyModal = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' || e.code === 'Escape') {
      handleCloseModal();
    }
  };

  const onSubmit = (data: { username: string }) => {
    dispatch(addAuthor({ username: data.username }));
    handleCloseModal();
    reset();
    console.log(data);
  };

  useKeyDown(handleKeyModal);

  return (
    <S.Container>
      <ColumnList />
      <Modal showModal={showModal} onClick={handleCloseModal}>
        <S.Register onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} name="username" outline="1px solid #EEEEEE" placeholder="Введите ваше имя" />
          <ButtonIcon background="transparent" border="transparent" hover="transparent" typeIcon="Close" />
        </S.Register>
      </Modal>
    </S.Container>
  );
};
