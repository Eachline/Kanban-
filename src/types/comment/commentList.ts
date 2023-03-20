import { TComment } from '../initialState';

export interface ICommentList {
  cardData: { _id: string; id: string; title: string; description: string; edit: boolean; author: string; comments: TComment[] };
}
