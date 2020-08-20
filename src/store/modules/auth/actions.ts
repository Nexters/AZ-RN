import { createAsyncAction, createAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { AuthStateTypes } from './types';

export const CREATE_ACCOUNT = 'auth/CREATE_ACCOUNT';
export const CREATE_ACCOUNT_SUCCESS = 'auth/CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILURE = 'auth/CREATE_ACCOUNT_FAILURE';

export const LOGOUT = 'auth/LOGOUT';

export const createAccountRequestAsync = createAsyncAction(
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
)<void, AuthStateTypes, AxiosError>();

export const logout = createAction(LOGOUT)<void>();
