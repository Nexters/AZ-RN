import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { UserStateTypes, ReqError } from './types';

export const VERIFY_ID = 'auth/VERIFY_ID';
export const VERIFY_ID_SUCCESS = 'auth/VERIFY_ID_SUCCESS';
export const VERIFY_ID_FAILURE = 'auth/VERIFY_ID_FAILURE';

export const VERIFY_NICKNAME = 'auth/VERIFY_NICKNAME';
export const VERIFY_NICKNAME_SUCCESS = 'auth/VERIFY_NICKNAME_SUCCESS';
export const VERIFY_NICKNAME_FAILURE = 'auth/VERIFY_NICKNAME_FAILURE';

export const LOAD_MY_POSTS = 'user/LOAD_MY_POSTS';
export const LOAD_MY_POSTS_SUCCESS = 'user/LOAD_MY_POSTS_SUCCESS';
export const LOAD_MY_POSTS_FAILURE = 'user/LOAD_MY_POSTS_FAILURE';

export const LOAD_MY_COMMENTS = 'user/LOAD_MY_COMMENTS';
export const LOAD_MY_COMMENTS_SUCCESS = 'user/LOAD_MY_COMMENTS_SUCCESS';
export const LOAD_MY_COMMENTS_FAILURE = 'user/LOAD_MY_COMMENTS_FAILURE';

export const verifyIdRequestAsync = createAsyncAction(
  VERIFY_ID,
  VERIFY_ID_SUCCESS,
  VERIFY_ID_FAILURE,
)<void, UserStateTypes, ReqError>();

export const verifyNicknameRequestAsync = createAsyncAction(
  VERIFY_NICKNAME,
  VERIFY_NICKNAME_SUCCESS,
  VERIFY_NICKNAME_FAILURE,
)<void, UserStateTypes, ReqError>();

export const LoadMyPostsRequestAsync = createAsyncAction(
  LOAD_MY_POSTS,
  LOAD_MY_POSTS_SUCCESS,
  LOAD_MY_POSTS_FAILURE,
)<void, UserStateTypes, ReqError>();

export const LoadMyCommentsRequestAsync = createAsyncAction(
  LOAD_MY_COMMENTS,
  LOAD_MY_COMMENTS_SUCCESS,
  LOAD_MY_COMMENTS_FAILURE,
)<void, UserStateTypes, ReqError>();
