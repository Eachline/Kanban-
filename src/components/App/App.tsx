import React, { useState, useEffect } from 'react';
import InitialStateColumn from 'api/column.api';
import Input from 'components/Input';
import Modal from 'components/Modal';
import Register from 'components/Register';
import ButtonIcon from 'components/ButtonIcon';
import ColumnList from 'components/ColumnList';
import { newGuid } from 'utils/guid';
import * as S from './StyleApp';

export const App: React.FC = () => {
  const [columnData, setColumnData] = useState(JSON.parse(localStorage.getItem('column') as any) || InitialStateColumn);
  const [showModal, setShowModal] = useState(!localStorage.getItem('column') ? true : false);
  const [userName, setUserName] = useState('');

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  console.log(columnData);

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleKeyModal = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleToggleModal();
    }
  };

  const createDataAuthor = () => {
    columnData.map((column: any) => (column.author = userName));
  };
  createDataAuthor();

  const handleAddColumn = () => {
    const newItemColumn = {
      id: newGuid(),
      title: 'Column name',
      author: userName,
      edit: false,
      cards: [],
    };
    setColumnData((prevState: any) => [newItemColumn, ...prevState]);
  };

  const handleEditColumn = (id: number, title: string) => {
    setColumnData((prevState: any) =>
      prevState.map((columnEdit: any) => (columnEdit.id === id ? { ...columnEdit, title, edit: !columnEdit.edit } : columnEdit)),
    );
  };

  const handleDeleteColumn = (id: number) => {
    setColumnData((prevState: any) => prevState.filter((column: any) => column.id !== id));
  };

  const handleAddCard = (id: number, title: string, description: string) => {
    const columnIndex = columnData.findIndex((column: any) => column.id === id);
    const initialState = [...columnData];

    const newItemCard = {
      id: newGuid(),
      title,
      description,
      edit: false,
      author: userName,
      comments: [],
    };

    initialState[columnIndex].cards.unshift(newItemCard);

    setColumnData(initialState);
  };

  const handleDeleteCard = (columnIndex: number, cardIndex: number) => {
    const columnId = columnData.findIndex((column: any) => column.id === columnIndex);
    const initialState = [...columnData];
    const cards = initialState[columnId].cards;

    const cardId = cards.findIndex((card: any) => card.id === cardIndex);

    cards.splice(cardId, 1);
    setColumnData(initialState);
  };

  const handleEditCard = (columnIndex: number, cardIndex: number, card: any) => {
    const columnId = columnData.findIndex((column: any) => column.id === columnIndex);
    const initialState = [...columnData];
    const cards = initialState[columnId].cards;

    const cardIdx = cards.findIndex((card: any) => card.id === cardIndex);
    initialState[columnId].cards[cardIdx] = card;
    setColumnData(InitialStateColumn);
  };

  const handleAddComment = (columnId: number, cardId: number, value: string) => {
    const columnIndex = columnData.findIndex((column: any) => column.id === columnId);
    const initialState = [...columnData];
    const card = initialState[columnIndex].cards;
    const cardIdx = card.findIndex((card: any) => card.id === cardId);

    const newCommentItem = {
      id: newGuid(),
      author: userName,
      edit: false,
      comment: value,
    };

    initialState[columnIndex].cards[cardIdx].comments.unshift(newCommentItem);
  };

  // const handleEditComment = (columnId: number, cardId: number, commentId: number) => {};

  const handleDeleteComment = (columnId: number, cardId: number, commentId: number) => {
    const columnIndex = columnData.findIndex((column: any) => column.id === columnId);
    const initialState = [...columnData];
    const card = initialState[columnIndex].cards;
    const cardIdx = card.findIndex((card: any) => card.id === cardId);
    const comment = initialState[columnIndex].cards[cardIdx].comments;
    const commentIdx = comment.findIndex((comment: any) => comment.id === commentId);
    comment.splice(commentIdx, 1);
    setColumnData(initialState);
  };

  useEffect(() => {
    localStorage.setItem('column', JSON.stringify(columnData));
  }, [columnData]);

  return (
    <S.Container>
      <ColumnList
        columnData={columnData}
        addColumn={handleAddColumn}
        onDeleteColumn={handleDeleteColumn}
        editColumn={handleEditColumn}
        addCard={handleAddCard}
        onDeleteCard={handleDeleteCard}
        editCard={handleEditCard}
        addComment={handleAddComment}
        onDeleteComment={handleDeleteComment}
      />
      <Modal showModal={showModal}>
        <Register>
          <Input onKeyDown={handleKeyModal} outline="1px solid #EEEEEE" placeholder="Введите ваше имя" value={userName} onChange={handleName} />
          <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={handleToggleModal} typeIcon="Close" />
        </Register>
      </Modal>
    </S.Container>
  );
};
