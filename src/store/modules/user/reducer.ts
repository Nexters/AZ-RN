import { createReducer } from 'typesafe-actions';
import { PostActions, UserStateTypes, SignInAction } from './types';
import { PayloadType } from '~/@types';
import { SAMPLE_LOGIN } from './actions';

const initialState: UserStateTypes = {
  auth: {
    isAuthenticated: false,
  },
};

const postReducer = createReducer<UserStateTypes, PostActions>(initialState, {
  [SAMPLE_LOGIN]: (state, action) => applySignIn(state, action),
});

const applySignIn = <
  S extends UserStateTypes,
  A extends PayloadType<'sample/SIGNIN_SUCCESS', SignInAction>
>(
  state: S,
  action: A,
) => {
  const {
    payload: { isAuthenticated },
  } = action;
  return {
    ...state,
    auth: {
      isAuthenticated,
    },
  };
};

export default postReducer;
