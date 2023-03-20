import { createSlice } from '@reduxjs/toolkit';
import { newGuid } from 'utils/guid';
import { InitialStateColumn, InitialStateCard, InitialStateComment } from 'api';

const columnSlice = createSlice({
  name: '@@column',
  initialState: InitialStateColumn,
  reducers: {
    addAuthor: (state, action) => {
      state.map((column) => (column.author = action.payload.username));
    },
    addColumn: (state) => {
      state.unshift({
        id: newGuid(),
        title: 'Column name',
        author: 'not author',
        edit: false,
        cards: InitialStateCard,
      });
    },
    toggleColumn: (state, action) => {
      const toggleColumn = state.find((column) => column.id === action.payload.id);
      if (toggleColumn) toggleColumn.edit = !toggleColumn.edit;
    },
    editColumn: (state, action) => {
      return state.map((column) => (column.id === action.payload.id ? { ...column, title: action.payload.title, edit: false } : column));
    },
    removeColumn: (state, action) => {
      return state.filter((column) => column.id !== action.payload.id);
    },
    addCard: (state, action) => {
      const columnItem = state.find((column) => column.id === action.payload.id);
      columnItem?.cards.unshift({
        id: newGuid(),
        _id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        edit: false,
        author: columnItem.author,
        comments: InitialStateComment,
      });
    },
    toggleCard: (state, action) => {
      const columnItem = state.find((column) => column.id === action.payload._id);
      const cardItem = columnItem?.cards.find((card) => card.id === action.payload.id);
      if (cardItem) cardItem.edit = !cardItem.edit;
    },
    editCard: (state, action) => {
      const columnItem = state.find((column) => column.id === action.payload._id);
      const editCard = columnItem?.cards.map((card) =>
        card.id === action.payload.id ? { ...card, title: action.payload.title, description: action.payload.description, edit: false } : card,
      );
      if (columnItem && editCard) columnItem.cards = editCard;
    },
    removeCard: (state, action) => {
      const columnItem = state.find((column) => column.id === action.payload._id);
      const filterData = columnItem?.cards.filter((card) => card.id !== action.payload.id);
      if (columnItem && filterData) columnItem.cards = filterData;
    },
    addComment: (state, action) => {
      const columnItem = state.find((column) => column.id === action.payload._id);
      const cardItem = columnItem?.cards.find((card) => card.id === action.payload.id);
      cardItem?.comments.unshift({
        _id: action.payload._id,
        id: newGuid(),
        author: cardItem.author,
        edit: false,
        comment: action.payload.comment,
      });
    },
    toggleComment: (state, action) => {
      const columnItem = state.find((column) => column.id === action.payload._id);
      const cardItem = columnItem?.cards.find((card) => card.id === action.payload.cardIndex);
      const commentItem = cardItem?.comments.find((comment) => comment.id === action.payload.id);
      if (commentItem) commentItem.edit = !commentItem.edit;
    },
    editComment: (state, action) => {
      const columnItem = state.find((column) => column.id === action.payload._id);
      const cardItem = columnItem?.cards.find((card) => card.id === action.payload.cardIndex);
      const editComment = cardItem?.comments.map((comment) =>
        comment.id === action.payload.id ? { ...comment, comment: action.payload.comment, edit: false } : comment,
      );
      if (editComment && cardItem) cardItem.comments = editComment;
    },
    removeComment: (state, action) => {
      const columnItem = state.find((column) => column.id === action.payload._id);
      const cardItem = columnItem?.cards.find((card) => card.id === action.payload.cardIndex);
      const filterData = cardItem?.comments.filter((comment) => comment.id !== action.payload.id);
      if (cardItem && filterData) cardItem.comments = filterData;
    },
  },
});

export const {
  addAuthor,
  addColumn,
  addCard,
  addComment,
  editColumn,
  editCard,
  editComment,
  toggleColumn,
  toggleCard,
  toggleComment,
  removeColumn,
  removeCard,
  removeComment,
} = columnSlice.actions;
export default columnSlice.reducer;
