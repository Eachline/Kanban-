import { newGuid } from 'utils/guid';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';

export type IconType = 'Close' | 'User';

export const IconTypes = new Map([
   ['Close', <Close key={newGuid()} />],
   ['User', <User key={newGuid()} />],
]);
