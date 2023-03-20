import { TCard } from '../initialState';

export interface ICardList {
  columnData: { id: string; title: string; author: string; edit: boolean; cards: TCard[] };
}
