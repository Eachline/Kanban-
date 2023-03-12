import { TCard, TComment } from '../initialState';

export interface ICardItem {
  columnIndex: string;
  cardData: TCard;
  onDeleteCard: (columnIndex: string, cardIndex: string) => void;
  editCard: (columnIndex: string, cardIndex: string, card: TCard) => void;
  addComment: (columnId: string, cardId: string, value: string) => void;
  onDeleteComment: (columnId: string, cardId: string, commentId: string) => void;
  editComment: (columnIndex: string, cardIndex: string, commentIndex: string, comment: TComment) => void;
}
