import { createReducer } from 'typesafe-actions';
import { UserActions, UserStateTypes } from './types';
import {
  VERIFY_ID_SUCCESS,
  VERIFY_ID_FAILURE,
  VERIFY_NICKNAME_SUCCESS,
  VERIFY_NICKNAME_FAILURE,
  LOAD_MY_COMMENTS_SUCCESS,
  LOAD_MY_POSTS_SUCCESS,
  LOAD_MY_POSTS_FAILURE,
  LOAD_MY_BOOKMARK_POSTS_SUCCESS,
} from './actions';

const initialState: UserStateTypes = {
  duplicateCheck: {
    isIdUsed: undefined,
    isNicknameUsed: undefined,
  },
  myComment: {
    commentList: [],
    simplePage: {
      currentPage: 0,
      totalElements: 0,
      totalPages: 0,
    },
  },
  myPost: {
    posts: [],
    simplePage: {
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
    },
  },
  myBookmark: {
    posts: [],
    simplePage: {
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
    },
  },
  error: '',
  status: 401,
};

const postReducer = createReducer<UserStateTypes, UserActions>(initialState, {
  [VERIFY_ID_SUCCESS]: (state, action) => {
    return {
      ...state,
      duplicateCheck: {
        ...state.duplicateCheck,
        isIdUsed: false,
      },
    };
  },
  [VERIFY_ID_FAILURE]: (state, action) => ({ ...state, ...action.payload }),
  [VERIFY_NICKNAME_SUCCESS]: (state, action) => ({
    ...state,
    duplicateCheck: {
      ...state.duplicateCheck,
      isNicknameUsed: false,
    },
  }),
  [VERIFY_ID_FAILURE]: (state, action) => {
    return {
      ...state,
      duplicateCheck: {
        ...state.duplicateCheck,
        isIdUsed: true,
      },
    };
  },
  [VERIFY_NICKNAME_FAILURE]: (state, action) => ({
    ...state,
    duplicateCheck: {
      ...state.duplicateCheck,
      isNicknameUsed: true,
    },
  }),
  [LOAD_MY_COMMENTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      myComment: action.payload,
    };
  },
  [LOAD_MY_POSTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      myPost: action.payload,
    };
  },
  [LOAD_MY_POSTS_FAILURE]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [LOAD_MY_BOOKMARK_POSTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      myBookmark: action.payload,
    };
  },
});

export default postReducer;
