import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { Post, PostDetail } from './types';

export const LOAD_POSTS = 'post/LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = 'post/LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'post/LOAD_POSTS_FAILURE';

export const LOAD_POST_DETAIL = 'post/LOAD_POST_DETAIL';
export const LOAD_POST_DETAIL_SUCCESS = 'post/LOAD_POST_DETAIL_SUCCESS';
export const LOAD_POST_DETAIL_FAILURE = 'post/LOAD_POST_DETAIL_FAILURE';

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
