import React, { useState } from 'react';
import InitialStateColumn from 'api/column.api';
import Input from 'components/ui/Input';
import Modal from 'components/ui/Modal';
import ButtonIcon from 'components/ui/ButtonIcon';
import ColumnList from 'components/Column/ColumnList';
import * as S from './StyleApp';

import { newGuid } from 'utils/guid';
import { TColumn, TComment, TCard } from 'types/initialState';
import { useLocalStorage } from 'hook/useLocalStorage';
import { useKeyDown } from 'hook/useKeyDown';

export const App: React.FC = () => {
  const [columnData, setColumnData] = useLocalStorage('column', InitialStateColumn);
  const [showModal, setShowModal] = useState<boolean>(!localStorage.getItem('column') ? true : false);
  const [userName, setUserName] = useState('');

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
    const initialState = [...columnData];
    const newInitialState = initialState.map((columnItem) => (columnItem.id === id ? (columnItem = column) : columnItem));
    setColumnData(newInitialState);
  };

  const handleDeleteColumn = (id: string) => {
    const columnIndex = columnData.findIndex((column) => column.id === id);
    const initialState = [...columnData];
    initialState.splice(columnIndex, 1);
    setColumnData(initialState);
  };

  const handleAddCard = (id: string, title: string, description: string) => {
    const initialState = [...columnData];
    const columnItem = initialState.find((column) => column.id === id);

    const newItemCard = {
      id: newGuid(),
      title,
      description,
      edit: false,
      author: userName,
      comments: [],
    };

    columnItem?.cards.unshift(newItemCard);
    setColumnData(initialState);
  };

  const handleDeleteCard = (columnIndex: string, cardIndex: string) => {
    const initialState = [...columnData];
    const columnItem = initialState.find((column) => column.id === columnIndex);
    const cardItem = columnItem?.cards.findIndex((card) => card.id === cardIndex);
    columnItem?.cards.splice(Number(cardItem), 1);
    setColumnData(initialState);
  };

  const handleEditCard = (columnIndex: string, cardIndex: string, card: TCard) => {
    const initialState = [...columnData];
    const columnId = columnData.findIndex((column) => column.id === columnIndex);
    const cards = initialState[columnId].cards;

    const cardIdx = cards.findIndex((card) => card.id === cardIndex);
    initialState[columnId].cards[cardIdx] = card;
    setColumnData(initialState);
  };

  const handleAddComment = (columnId: string, cardId: string, value: string) => {
    const initialState = [...columnData];
    const columnItem = initialState.find((column) => column.id === columnId);
    const cardItem = columnItem?.cards.find((card) => card.id === cardId);

    const newCommentItem = {
      id: newGuid(),
      author: userName,
      edit: false,
      comment: value,
    };

    cardItem?.comments.unshift(newCommentItem);
    setColumnData(initialState);
  };

  const handleEditComment = (columnIndex: string, cardIndex: string, commentIndex: string, comment: TComment) => {
    const columnId = columnData.findIndex((column) => column.id === columnIndex);
    const initialState = [...columnData];
    const cards = initialState[columnId].cards;
    const cardIdx = cards.findIndex((card) => card.id === cardIndex);
    const comments = initialState[columnId].cards[cardIdx].comments;
    const commentIdx = comments.findIndex((comment) => comment.id === commentIndex);
    initialState[columnId].cards[cardIdx].comments[commentIdx] = comment;
    setColumnData(initialState);
  };

  const handleDeleteComment = (columnId: string, cardId: string, commentId: string) => {
    const initialState = [...columnData];
    const columnItem = initialState.find((column) => column.id === columnId);
    const cardItem = columnItem?.cards.find((card) => card.id === cardId);
    const commentIndex = cardItem?.comments.findIndex((comments) => comments.id === commentId);
    cardItem?.comments.splice(Number(commentIndex), 1);
    setColumnData(initialState);
  };

  useKeyDown(handleKeyModal);

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
      <Modal showModal={showModal} onClick={handleCloseModal}>
        <S.Register>
          <Input outline="1px solid #EEEEEE" placeholder="Введите ваше имя" value={userName} onChange={handleName} />
          <ButtonIcon background="transparent" border="transparent" hover="transparent" onClick={handleCloseModal} typeIcon="Close" />
        </S.Register>
      </Modal>
    </S.Container>
  );
};
