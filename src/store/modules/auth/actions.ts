import { createAsyncAction, createAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { AuthStateTypes } from './types';

export const CREATE_ACCOUNT = 'auth/CREATE_ACCOUNT';
export const CREATE_ACCOUNT_SUCCESS = 'auth/CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILURE = 'auth/CREATE_ACCOUNT_FAILURE';

export const POST_LOGIN = 'auth/POST_LOGIN';
export const POST_LOGIN_SUCCESS = 'auth/POST_LOGIN_SUCCESS';
export const POST_LOGIN_FAILURE = 'auth/POST_LOGIN_FAILURE';

export const LOGOUT = 'auth/LOGOUT';

export const createAccountRequestAsync = createAsyncAction(
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
)<void, AuthStateTypes, AxiosError>();

export const postLoginRequestAsync = createAsyncAction(
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
)<void, AuthStateTypes, AxiosError>();

export const logout = createAction(LOGOUT)<void>();
