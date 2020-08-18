import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { Post } from './types';

export const LOAD_POSTS = 'post/LOAD_POSTS';
export const LOAD_POSTS_SUCCESS = 'post/LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'post/LOAD_POSTS_FAILURE';

export const loadPostsRequestAsync = createAsyncAction(
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
)<void, Post, AxiosError>();
