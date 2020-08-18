import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type PostActions = ActionType<typeof actions>;
export interface Post {
  posts: Posts[];
  simplePage: SimplePage;
}

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
