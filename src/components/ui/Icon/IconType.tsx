import { newGuid } from 'utils/guid';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as User } from '../../../assets/icons/user.svg';
import { ReactComponent as Edit } from '../../../assets/icons/edit.svg';

export type IconType = 'Close' | 'User' | 'Edit';

export const IconTypes = new Map([
  ['Close', <Close key={newGuid()} />],
  ['User', <User key={newGuid()} />],
  ['Edit', <Edit key={newGuid()} />],
]);
