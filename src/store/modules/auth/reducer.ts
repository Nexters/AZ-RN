import { createReducer } from 'typesafe-actions';
import { PostActions, AuthStateTypes } from './types';
import { CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAILURE, LOGOUT } from './actions';

// public enum Rating {
//   NEW_RECRUIT("신입사원", "어이신입ㅋ\n유머 좁 하나?", 0, 0),
//   ASSISTANT_MANAGE("대리", "어이대리~\n반려다 니 유머", 5, 3),
//   DEPARTMENT_HEAD("부장", "부장님ㅋㅎ\nMZ세대는 달라^^", 10 ,15),
//   MANAGING_DIRECTOR("상무", "이야~상무님!\n나이스샷ㅎ", 50, 50),
//   BOSS("사장", "사장님.\n탁월하십니다.", 100, 100);

const initialState: AuthStateTypes = {
  isAuthenticated: false,
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
