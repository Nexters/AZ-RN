import { createAsyncAction, createAction } from 'typesafe-actions';
import { AxiosError, AxiosResponse } from 'axios';
import { SignInAction } from './types';

export const SIGNIN = 'user/SIGNIN';
export const SIGNIN_SUCCESS = 'user/SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'user/SIGNIN_FAILURE';

export const SAMPLE_LOGIN = 'sample/SIGNIN_SUCCESS';

export const postLoginRequestAsync = createAsyncAction(SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE)<
  void,
  AxiosResponse,
  AxiosError
>();

export const sampleLoginAction = createAction(SAMPLE_LOGIN)<SignInAction>();
