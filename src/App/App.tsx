import React, { useState } from 'react';
import * as S from './StyleApp';
import { Input, ButtonIcon, Modal } from 'Common/components';
import { ColumnList } from 'Features/components';
import { useKeyDown } from 'Common/hook/useKeyDown';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'Common/hook/useAppDispatch';
import { addAuthor } from 'Features/duck/Column-Slice';

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
    if (e.code === 'Escape') {
      handleCloseModal();
    }
  };

  const onSubmit = (data: { username: string }) => {
    dispatch(addAuthor({ username: data.username }));
    handleCloseModal();
    reset();
  };

  useKeyDown(handleKeyModal);

  return (
    <S.Container>
      <ColumnList />
      <Modal showModal={showModal} onClick={handleCloseModal}>
        <S.Register onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} name="username" outline="1px solid #EEEEEE" placeholder="Введите ваше имя" />
          <ButtonIcon background="transparent" border="transparent" hover="transparent" typeIcon="Edit" />
        </S.Register>
      </Modal>
    </S.Container>
  );
};
