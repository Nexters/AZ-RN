import { createReducer } from 'typesafe-actions';
import { UserActions, UserStateTypes } from './types';
import { PayloadType } from '~/@types';
import {
  VERIFY_ID_SUCCESS,
  VERIFY_ID_FAILURE,
  VERIFY_NICKNAME_SUCCESS,
  VERIFY_NICKNAME_FAILURE,
} from './actions';

const initialState: UserStateTypes = {
  duplicateCheck: {
    isIdUsed: undefined,
    isNicknameUsed: undefined,
  },
  error: '',
  status: 401,
};

const postReducer = createReducer<UserStateTypes, UserActions>(initialState, {
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

export default postReducer;
