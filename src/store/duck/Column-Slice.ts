import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { newGuid } from 'Common/utils/guid';
import { InitialStateColumn } from 'Features/api';
import { IAddAuthorColumnAction, IEditColumnAction, IRemoveColumnAction, IToggleColumnAction } from './Column.interface';

const columnSlice = createSlice({
  name: '@@column',
  initialState: InitialStateColumn,
  reducers: {
    addAuthorColumn: (state, action: PayloadAction<IAddAuthorColumnAction>) => {
      state.map((column) => (column.author = action.payload.username));
    },
    addColumn: (state, action) => {
      state.unshift({
        id: newGuid(),
        title: 'Column name',
        author: action.payload.username,
        edit: false,
      });
    },
    toggleColumn: (state, action: PayloadAction<IToggleColumnAction>) => {
      const toggleColumn = state.find((column) => column.id === action.payload.id);
      if (toggleColumn) toggleColumn.edit = !toggleColumn.edit;
    },
    editColumn: (state, action: PayloadAction<IEditColumnAction>) => {
      return state.map((column) => (column.id === action.payload.id ? { ...column, title: action.payload.title, edit: false } : column));
    },
    removeColumn: (state, action: PayloadAction<IRemoveColumnAction>) => {
      return state.filter((column) => column.id !== action.payload.id);
    },
  },
});

export const { addAuthorColumn, addColumn, editColumn, toggleColumn, removeColumn } = columnSlice.actions;
export default columnSlice.reducer;
