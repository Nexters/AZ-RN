import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Post, Comment } from '../post/types';

export type UserActions = ActionType<typeof actions>;

export type UserStateTypes = {
  error: string;
  status: number;
  duplicateCheck: DuplicateCheck;
  myComment: Comment;
  myPost: Post;
  myBookmark: Post;
};
export type ReqError = {
  status: number;
  error: string;
};
interface DuplicateCheck {
  isIdUsed: undefined | boolean;
  isNicknameUsed: undefined | boolean;
}
