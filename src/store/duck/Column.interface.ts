export interface IAddAuthorColumnAction {
  username: string;
}

export interface IToggleColumnAction {
  id: string;
}

export interface IEditColumnAction {
  id: string;
  title: string;
}

export interface IRemoveColumnAction {
  id: string;
}
