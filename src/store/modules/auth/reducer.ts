import { createReducer } from 'typesafe-actions';
import { PostActions, AuthStateTypes } from './types';
import { CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILURE, LOGOUT } from './actions';

const initialState: AuthStateTypes = {
  isAuthenticated: false,
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
  status: 401,
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
  [LOGOUT]: () => ({
    ...initialState,
  }),
});

export default authReducer;
