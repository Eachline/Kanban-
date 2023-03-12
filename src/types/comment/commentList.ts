import { TComment } from '../initialState';

export interface ICommentList {
  columnIndex: string;
  cardData: { id: string; title: string; description: string; edit: boolean; author: string; comments: TComment[] };
  addComment: (columnId: string, cardId: string, value: string) => void;
  onDeleteComment: (columnId: string, cardId: string, commentId: string) => void;
  editComment: (columnIndex: string, cardIndex: string, commentIndex: string, comment: TComment) => void;
}
