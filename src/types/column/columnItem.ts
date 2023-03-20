import { TCard } from '../initialState';

export interface IColumnItem {
  columnData: { id: string; title: string; author: string; edit: boolean; cards: TCard[] };
}
