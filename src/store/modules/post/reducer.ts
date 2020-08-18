import { createReducer } from 'typesafe-actions';
import { PostActions, Post } from './types';
import { LOAD_POSTS_SUCCESS } from './actions';

const initialState: Post = {
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
};

const postReducer = createReducer<Post, PostActions>(initialState, {
  [LOAD_POSTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
});

export default postReducer;
