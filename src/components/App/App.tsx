import React, { useState, useEffect } from 'react';
import InitialStateColumn from 'api/column.api';
import Input from 'components/ui/Input';
import Modal from 'components/ui/Modal';
import ButtonIcon from 'components/ui/ButtonIcon';
import ColumnList from 'components/Column/ColumnList';
import * as S from './StyleApp';

import { newGuid } from 'utils/guid';
import { TInitialStateColumn, TColumn, TComment, TCard } from 'types/initialState';

export const App: React.FC = () => {
  const [columnData, setColumnData] = useState<TInitialStateColumn>(JSON.parse(localStorage.getItem('column') as string) || InitialStateColumn);
  const [showModal, setShowModal] = useState<boolean>(!localStorage.getItem('column') ? true : false);
  const [userName, setUserName] = useState('');

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

  const createDataAuthor = () => {
    columnData.map((column) => (column.author = userName));
  };

  createDataAuthor();

  const handleAddColumn = () => {
    const initialState = [...columnData];

    const newItemColumn = {
      id: newGuid(),
      title: 'Column name',
      author: userName,
      edit: false,
      cards: [],
    };

    initialState.unshift(newItemColumn);
    setColumnData(initialState);
  };

  const handleEditColumn = (id: string, column: TColumn) => {
    const columnIndex = columnData.findIndex((column) => column.id === id);
    const initialState = [...columnData];
    initialState[columnIndex] = column;
    setColumnData(initialState);
  };

  const handleDeleteColumn = (id: string) => {
    const columnIndex = columnData.findIndex((column) => column.id === id);
    const initialState = [...columnData];
    initialState.splice(columnIndex, 1);
    setColumnData(initialState);
  };

  const handleAddCard = (id: string, title: string, description: string) => {
    const columnIndex = columnData.findIndex((column) => column.id === id);
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

  const handleDeleteCard = (columnIndex: string, cardIndex: string) => {
    const columnId = columnData.findIndex((column) => column.id === columnIndex);
    const initialState = [...columnData];
    const cards = initialState[columnId].cards;

    const cardId = cards.findIndex((card) => card.id === cardIndex);

    cards.splice(cardId, 1);
    setColumnData(initialState);
  };

  const handleEditCard = (columnIndex: string, cardIndex: string, card: TCard) => {
    const columnId = columnData.findIndex((column) => column.id === columnIndex);
    const initialState = [...columnData];
    const cards = initialState[columnId].cards;

    const cardIdx = cards.findIndex((card) => card.id === cardIndex);
    initialState[columnId].cards[cardIdx] = card;
    setColumnData(InitialStateColumn);
  };

  const handleAddComment = (columnId: string, cardId: string, value: string) => {
    const columnIndex = columnData.findIndex((column) => column.id === columnId);
    const initialState = [...columnData];
    const card = initialState[columnIndex].cards;
    const cardIdx = card.findIndex((card) => card.id === cardId);

    const newCommentItem = {
      id: newGuid(),
      author: userName,
      edit: false,
      comment: value,
    };

    initialState[columnIndex].cards[cardIdx].comments.unshift(newCommentItem);
  };

  const handleEditComment = (columnIndex: string, cardIndex: string, commentIndex: string, comment: TComment) => {
    const columnId = columnData.findIndex((column) => column.id === columnIndex);
    const initialState = [...columnData];
    const cards = initialState[columnId].cards;
    const cardIdx = cards.findIndex((card) => card.id === cardIndex);
    const comments = initialState[columnId].cards[cardIdx].comments;
    const commentIdx = comments.findIndex((comment) => comment.id === commentIndex);
    initialState[columnId].cards[cardIdx].comments[commentIdx] = comment;
    setColumnData(InitialStateColumn);
  };

  const handleDeleteComment = (columnId: string, cardId: string, commentId: string) => {
    const columnIndex = columnData.findIndex((column) => column.id === columnId);
    const initialState = [...columnData];
    const card = initialState[columnIndex].cards;
    const cardIdx = card.findIndex((card) => card.id === cardId);
    const comment = initialState[columnIndex].cards[cardIdx].comments;
    const commentIdx = comment.findIndex((comment) => comment.id === commentId);
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
        editComment={handleEditComment}
      />
      <Modal showModal={showModal}>
        <S.Register>
          <Input onKeyDown={handleKeyModal} outline="1px solid #EEEEEE" placeholder="Введите ваше имя" value={userName} onChange={handleName} />
          <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={handleToggleModal} typeIcon="Close" />
        </S.Register>
      </Modal>
    </S.Container>
  );
};
