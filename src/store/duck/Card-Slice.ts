import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { newGuid } from 'Common/utils/guid';
import { InitialStateCard } from 'Features/api';
import { IAddCardAction, IEditCardAction, IRemoveCardAction, IToggleCardAction } from './Card.interface';

const cardSlice = createSlice({
  name: '@@card',
  initialState: InitialStateCard,
  reducers: {
    addCard: (state, action: PayloadAction<IAddCardAction>) => {
      state.unshift({
        columnId: action.payload.columnId,
        id: newGuid(),
        title: action.payload.title,
        description: action.payload.description,
        edit: false,
        author: action.payload.username,
      });
    },
    toggleCard: (state, action: PayloadAction<IToggleCardAction>) => {
      const toggleCard = state.find((card) => card.id === action.payload.id);
      if (toggleCard) toggleCard.edit = !toggleCard.edit;
    },
    editCard: (state, action: PayloadAction<IEditCardAction>) => {
      return state.map((card) =>
        card.id === action.payload.id ? { ...card, title: action.payload.title, description: action.payload.description, edit: false } : card,
      );
    },
    removeCard: (state, action: PayloadAction<IRemoveCardAction>) => {
      return state.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const { addCard, editCard, removeCard, toggleCard } = cardSlice.actions;
export default cardSlice.reducer;
