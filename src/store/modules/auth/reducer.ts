import { createReducer } from 'typesafe-actions';
import { PostActions, AuthStateTypes } from './types';
import {
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  LOGOUT,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  RESET,
} from './actions';

const initialState: AuthStateTypes = {
  user: {
    id: 0,
    identification: '',
    nickname: '',
    rating: 'NEW_RECRUIT',
  },
  accessToken: {
    token: '',
    expire: 0,
  },
  refreshToken: '',
  error: '',
  status: 400,
};

const authReducer = createReducer<AuthStateTypes, PostActions>(initialState, {
  [CREATE_ACCOUNT_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [CREATE_ACCOUNT_FAILURE]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [POST_LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [POST_LOGIN_FAILURE]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [LOGOUT]: () => ({
    ...initialState,
  }),
  [RESET]: () => ({
    ...initialState,
    status: 400,
  }),
});

export default authReducer;
