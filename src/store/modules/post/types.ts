import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Rating } from '../auth/types';

export type PostActions = ActionType<typeof actions>;

export interface RootPost {
  postList: Post;
  postDetail: DetailedPost;
  popularPosts: Post;
}
export interface DetailedPost {
  post: PostDetail;
  comment: Comment;
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
  rating: Rating;
}

export interface SimplePage {
  currentPage: number;
  totalPages: number;
  totalElements: number;
}

// PostDetail load
export interface PostDetail {
  detailedPost: Posts;
}

// comments
export interface Comment {
  commentList: CommentList[];
  simplePage: SimplePage;
}

export interface CommentList {
  content: string;
  createdDate: string;
  id: number;
  modifiedDate: string;
  postId: number;
  writer: Writer;
}

export interface Writer {
  id: number;
  identification: string;
  nickname: string;
  rating: string;
}

export interface SimplePage {
  currentPage: number;
  totalElements: number;
  totalPages: number;
}
export interface DetailedComment {
  detailedComment: CommentList;
}
