import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { Post, PostDetail, DetailedComment } from './types';

export const LOAD_POSTS = 'post/LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = 'post/LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'post/LOAD_POSTS_FAILURE';

export const LOAD_POST_DETAIL = 'post/LOAD_POST_DETAIL';
export const LOAD_POST_DETAIL_SUCCESS = 'post/LOAD_POST_DETAIL_SUCCESS';
export const LOAD_POST_DETAIL_FAILURE = 'post/LOAD_POST_DETAIL_FAILURE';

export const LOAD_COMMENTS = 'post/LOAD_COMMENTS';
export const LOAD_COMMENTS_SUCCESS = 'post/LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'post/LOAD_COMMENTS_FAILURE';

export const CREATE_POST = 'post/CREATE_POST';
export const CREATE_POST_SUCCESS = 'post/CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'post/CREATE_POST_FAILURE';

export const POST_COMMENT = 'post/POST_COMMENT';
export const POST_COMMENT_SUCCESS = 'post/POST_COMMENT_SUCCESS';
export const POST_COMMENT_FAILURE = 'post/POST_COMMENT_FAILURE';

export const POST_LIKE = 'post/POST_LIKE';
export const POST_LIKE_SUCCESS = 'post/POST_LIKE_SUCCESS';
export const POST_LIKE_FAILURE = 'post/POST_LIKE_FAILURE';

export const POST_BOOKMARK = 'post/POST_BOOKMARK';
export const POST_BOOKMARK_SUCCESS = 'post/POST_BOOKMARK_SUCCESS';
export const POST_BOOKMARK_FAILURE = 'post/POST_BOOKMARK_FAILURE';

export const createPostRequestAsync = createAsyncAction(
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
)<void, PostDetail, AxiosError>();

export const loadPostsRequestAsync = createAsyncAction(
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
)<void, Post, AxiosError>();

export const loadPostDetailRequestAsync = createAsyncAction(
  LOAD_POST_DETAIL,
  LOAD_POST_DETAIL_SUCCESS,
  LOAD_POST_DETAIL_FAILURE,
)<void, PostDetail, AxiosError>();

export const loadCommentsRequestAsync = createAsyncAction(
  LOAD_COMMENTS,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
)<void, PostDetail, AxiosError>();

export const postCommentRequestAsync = createAsyncAction(
  POST_COMMENT,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE,
)<void, DetailedComment, AxiosError>();

export const postLikeRequestAsync = createAsyncAction(
  POST_LIKE,
  POST_LIKE_SUCCESS,
  POST_LIKE_FAILURE,
)<void, PostDetail, AxiosError>();

export const postBookmarkRequestAsync = createAsyncAction(
  POST_BOOKMARK,
  POST_BOOKMARK_SUCCESS,
  POST_BOOKMARK_FAILURE,
)<void, PostDetail, AxiosError>();
