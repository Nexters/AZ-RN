import { createReducer } from 'typesafe-actions';
import { PostActions, Post, RootPost } from './types';
import {
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POST_DETAIL_SUCCESS,
  LOAD_POST_DETAIL_FAILURE,
  LOAD_COMMENTS_FAILURE,
  LOAD_COMMENTS_SUCCESS,
} from './actions';
import init from './initialState';

const initialState: RootPost = init;

const postReducer = createReducer<RootPost, PostActions>(initialState, {
  [LOAD_POSTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      postList: {
        ...state.postList,
        ...action.payload,
      },
    };
  },
  [LOAD_POSTS_FAILURE]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [LOAD_POST_DETAIL_SUCCESS]: (state, action) => {
    return {
      ...state,
      postDetail: {
        ...state.postDetail,
        ...action.payload,
      },
    };
  },
  [LOAD_POST_DETAIL_FAILURE]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [LOAD_POST_DETAIL_SUCCESS]: (state, action) => {
    return {
      ...state,
      postDetail: {
        ...state.postDetail,
        post: {
          ...state.postDetail.post,
          ...action.payload,
        },
      },
    };
  },
  [LOAD_POST_DETAIL_FAILURE]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [LOAD_COMMENTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      postDetail: {
        ...state.postDetail,
        comment: {
          ...state.postDetail.comment,
          ...action.payload,
        },
      },
    };
  },
  [LOAD_COMMENTS_FAILURE]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
});

export default postReducer;
