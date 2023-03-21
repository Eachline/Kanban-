import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { newGuid } from 'Common/utils/guid';
import { InitialStateComment } from 'Features/api';
import { IAddCommentAction, IToggleCommentAction, IEditCommentAction, IRemoveCommentAction } from './Comment.interface';

const commentSlice = createSlice({
  name: '@@comment',
  initialState: InitialStateComment,
  reducers: {
    addComment: (state, action: PayloadAction<IAddCommentAction>) => {
      state.unshift({
        cardId: action.payload.cardId,
        id: newGuid(),
        author: '',
        edit: false,
        comment: action.payload.comment,
      });
    },
    toggleComment: (state, action: PayloadAction<IToggleCommentAction>) => {
      const toggleComment = state.find((card) => card.id === action.payload.id);
      if (toggleComment) toggleComment.edit = !toggleComment.edit;
    },
    editComment: (state, action: PayloadAction<IEditCommentAction>) => {
      return state.map((comment) => (comment.id === action.payload.id ? { ...comment, comment: action.payload.comment, edit: false } : comment));
    },
    removeComment: (state, action: PayloadAction<IRemoveCommentAction>) => {
      return state.filter((comment) => comment.id !== action.payload.id);
    },
  },
});

export const { addComment, editComment, removeComment, toggleComment } = commentSlice.actions;
export default commentSlice.reducer;
