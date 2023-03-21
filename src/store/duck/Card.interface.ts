export interface IAddCardAction {
  columnId: string;
  title: string;
  description: string;
}

export interface IToggleCardAction {
  id: string;
}

export interface IEditCardAction {
  id: string;
  title: string;
  description: string;
}

export interface IRemoveCardAction {
  id: string;
}
