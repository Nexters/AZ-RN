import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Post, Comment, Posts } from '../post/types';
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
  notification: Notification;
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
export interface Notification {
  detailedNoticeList: DetailedNoticeList[];
  simplePage: SimplePage;
}

export interface DetailedNoticeList {
  message: string;
  noticeId: number;
  noticeType: string;
  postId: number;
  createdDate: string;
  detailedPost: Posts;
}

export interface SimplePage {
  currentPage: number;
  totalElements: number;
  totalPages: number;
}
