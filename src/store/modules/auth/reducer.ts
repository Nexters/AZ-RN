import { createReducer, action } from 'typesafe-actions';
import { PostActions, AuthStateTypes } from './types';
import {
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  VERIFY_ID_SUCCESS,
  VERIFY_ID_FAILURE,
  VERIFY_NICKNAME_SUCCESS,
  VERIFY_NICKNAME_FAILURE,
} from './actions';

const initialState: AuthStateTypes = {
  user: {
    id: 0,
    identification: '',
    nickname: '',
    rating: '',
  },
  accessToken: {
    token: '',
    expire: 0,
  },
  duplicateCheck: {
    isIdUsed: undefined,
    isNicknameUsed: undefined,
  },
  refreshToken: '',
  error: '',
  status: 401,
};

const authReducer = createReducer<AuthStateTypes, PostActions>(initialState, {
  [CREATE_ACCOUNT_SUCCESS]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [CREATE_ACCOUNT_FAILURE]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [VERIFY_ID_SUCCESS]: (state, action) => {
    const { status } = action.payload;
    return {
      ...state,
      duplicateCheck: {
        ...state.duplicateCheck,
        isIdUsed: status !== 204 ? true : false,
      },
    };
  },
  [VERIFY_ID_FAILURE]: (state, action) => ({ ...state, ...action.payload }),
  [VERIFY_NICKNAME_SUCCESS]: (state, action) => ({
    ...state,
    duplicateCheck: {
      ...state.duplicateCheck,
      isNicknameUsed: action.payload.status !== 204 ? true : false,
    },
  }),
  [VERIFY_NICKNAME_FAILURE]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
});

export default authReducer;
