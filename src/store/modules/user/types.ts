import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Post, Comment } from '../post/types';
import { Rating } from '../auth/types';

export type UserActions = ActionType<typeof actions>;

export type UserStateTypes = {
  error: string;
  status: number;
  duplicateCheck: DuplicateCheck;
  myComment: Comment;
  myPost: Post;
  myBookmark: Post;
  ratingForPromotion: RatingForPromotion;
};
export type ReqError = {
  status: number;
  error: string;
};
interface DuplicateCheck {
  isIdUsed: undefined | boolean;
  isNicknameUsed: undefined | boolean;
}
export interface RatingForPromotion {
  currentRating: Rating;
  nextRating: Rating;
  postCountForPromotion: number;
  commentCountForPromotion: number;
  progress: number;
  message: string;
}
