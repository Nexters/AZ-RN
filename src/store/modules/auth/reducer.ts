import { createReducer } from 'typesafe-actions';
import { PostActions, AuthStateTypes } from './types';
import {
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  VERIFY_ID_SUCCESS,
  VERIFY_ID_FAILURE,
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
  [CREATE_ACCOUNT_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [CREATE_ACCOUNT_FAILURE]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
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
  [VERIFY_ID_FAILURE]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
});

export default authReducer;
