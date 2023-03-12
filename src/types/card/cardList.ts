import { TCard, TComment } from '../initialState';

export interface ICardList {
  columnData: { id: string; title: string; author: string; edit: boolean; cards: TCard[] };
  addCard: (id: string, title: string, description: string) => void;
  onDeleteCard: (columnIndex: string, cardIndex: string) => void;
  editCard: (columnIndex: string, cardIndex: string, card: TCard) => void;
  addComment: (columnId: string, cardId: string, value: string) => void;
  onDeleteComment: (columnId: string, cardId: string, commentId: string) => void;
  editComment: (columnIndex: string, cardIndex: string, commentIndex: string, comment: TComment) => void;
}
