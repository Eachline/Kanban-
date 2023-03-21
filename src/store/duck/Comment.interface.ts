export interface IAddCommentAction {
  cardId: string;
  comment: string;
}

export interface IToggleCommentAction {
  id: string;
}

export interface IEditCommentAction {
  id: string;
  comment: string;
}

export interface IRemoveCommentAction {
  id: string;
}
