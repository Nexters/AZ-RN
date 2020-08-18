import { createReducer } from 'typesafe-actions';
import { PostActions, Post, RootPost } from './types';
import {
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POST_DETAIL_SUCCESS,
  LOAD_POST_DETAIL_FAILURE,
} from './actions';

const initialState: RootPost = {
  postList: {
    posts: [
      {
        id: 0,
        author: {
          id: 0,
          identification: '',
          nickname: '',
          rating: '',
        },
        content: '',
        likes: 0,
        bookMarkCount: 0,
        commentCount: 0,
        pressLike: false,
        pressBookMark: false,
        createdDate: '',
        modifiedDate: '',
      },
    ],
    simplePage: {
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
    },
  },
  postDetail: {
    detailedPost: {
      author: {
        id: 0,
        identification: '',
        nickname: '',
        rating: '',
      },
      bookMarkCount: 0,
      commentCount: 0,
      content: '',
      createdDate: '',
      id: 0,
      likes: 0,
      modifiedDate: '',
      pressBookMark: false,
      pressLike: false,
    },
  },
};

const postReducer = createReducer<RootPost, PostActions>(initialState, {
  [LOAD_POSTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.payload.posts,
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
      ...action.payload.detailedPost,
    };
  },
  [LOAD_POST_DETAIL_FAILURE]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
});

export default postReducer;
