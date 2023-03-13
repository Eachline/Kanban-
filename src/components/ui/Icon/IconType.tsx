import { newGuid } from 'utils/guid';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as User } from '../../../assets/icons/user.svg';
import { ReactComponent as Edit } from '../../../assets/icons/edit.svg';
import { ReactComponent as Comment } from '../../../assets/icons/comment.svg';

export type IconType = 'Close' | 'User' | 'Edit' | 'Comment';

export const IconTypes = new Map([
  ['Close', <Close key={newGuid()} />],
  ['User', <User key={newGuid()} />],
  ['Edit', <Edit key={newGuid()} />],
  ['Comment', <Comment key={newGuid()} />],
]);
