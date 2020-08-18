import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type PostActions = ActionType<typeof actions>;

export interface RootPost {
  postList: Post;
  postDetail: PostDetail;
}
export interface Post {
  posts: Posts[];
  simplePage: SimplePage;
}
// Posts load api
export interface Posts {
  id: number;
  author: Author;
  content: string;
  likes: number;
  bookMarkCount: number;
  commentCount: number;
  pressLike: boolean;
  pressBookMark: boolean;
  createdDate: string;
  modifiedDate: string;
}

export interface Author {
  id: number;
  identification: string;
  nickname: string;
  rating: Rating | string;
}

export enum Rating {
  AssistantManage = 'ASSISTANT_MANAGE',
  DepartmentHead = 'DEPARTMENT_HEAD',
}
export interface SimplePage {
  currentPage: number;
  totalPages: number;
  totalElements: number;
}

// PostDetail load
export interface PostDetail {
  detailedPost: DetailedPost;
}
export interface DetailedPost {
  author: Author;
  bookMarkCount: number;
  commentCount: number;
  content: string;
  createdDate: string;
  id: number;
  likes: number;
  modifiedDate: string;
  pressBookMark: boolean;
  pressLike: boolean;
}
export interface Author {
  id: number;
  identification: string;
  nickname: string;
  rating: string;
}
