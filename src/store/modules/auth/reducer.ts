import { createReducer } from 'typesafe-actions';
import { PostActions, AuthStateTypes } from './types';
import { CREATE_ACCOUNT_SUCCESS } from './actions';

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
  refreshToken: '',
};

const postReducer = createReducer<AuthStateTypes, PostActions>(initialState, {
  [CREATE_ACCOUNT_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
});

export default postReducer;
