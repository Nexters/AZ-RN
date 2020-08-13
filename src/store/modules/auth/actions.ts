import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { AuthStateTypes } from './types';

export const CREATE_ACCOUNT = 'auth/CREATE_ACCOUNT';
export const CREATE_ACCOUNT_SUCCESS = 'auth/CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILURE = 'auth/CREATE_ACCOUNT_FAILURE';

export const VERIFY_ID = 'auth/VERIFY_ID';
export const VERIFY_ID_SUCCESS = 'auth/VERIFY_ID_SUCCESS';
export const VERIFY_ID_FAILURE = 'auth/VERIFY_ID_FAILURE';

export const SAMPLE_LOGIN = 'sample/CREATE_ACCOUNT_SUCCESS';

export const createAccountRequestAsync = createAsyncAction(
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
)<void, AuthStateTypes, AxiosError>();

export const verifyInRequestAsync = createAsyncAction(
  VERIFY_ID,
  VERIFY_ID_SUCCESS,
  VERIFY_ID_FAILURE,
)<void, AuthStateTypes, AxiosError>();
