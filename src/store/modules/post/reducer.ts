import { createReducer } from 'typesafe-actions';

import { PostActions, RootPost } from './types';
import {
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POST_DETAIL_SUCCESS,
  LOAD_POST_DETAIL_FAILURE,
  LOAD_COMMENTS_FAILURE,
  LOAD_COMMENTS_SUCCESS,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE,
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
  [CREATE_POST_SUCCESS]: (state, action) => {
    const { simplePage, posts } = state.postList;
    const appendPost = [action.payload.detailedPost, ...posts];
    return {
      ...state,
      postList: {
        posts: appendPost,
        simplePage,
      },
    };
  },
  [CREATE_POST_FAILURE]: (state, action) => {
    return {
      ...state,
    };
  },
  [POST_COMMENT_SUCCESS]: (state, action) => {
    const {
      comment: { commentList, simplePage },
      post,
    } = state.postDetail;
    const appendComment = [...commentList, action.payload.detailedComment];
    return {
      ...state,
      postDetail: {
        post,
        comment: {
          commentList: appendComment,
          simplePage,
        },
      },
    };
  },
  [POST_COMMENT_FAILURE]: (state, action) => {
    return {
      ...state,
    };
  },
});

export default postReducer;
