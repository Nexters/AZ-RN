import { createReducer } from 'typesafe-actions';
import { UserActions, UserStateTypes } from './types';
import {
  VERIFY_ID_SUCCESS,
  VERIFY_ID_FAILURE,
  VERIFY_NICKNAME_SUCCESS,
  VERIFY_NICKNAME_FAILURE,
  LOAD_MY_COMMENTS_SUCCESS,
  LOAD_MY_POSTS_SUCCESS,
  LOAD_MY_BOOKMARK_POSTS_SUCCESS,
  LOAD_RATING_SUCCESS,
  LOAD_NOTIFICATION_SUCCESS,
  REMOVE_BOOKMARK,
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
  ratingForPromotion: {
    currentRating: 'NEW_RECRUIT',
    nextRating: 'NEW_RECRUIT',
    postCountForPromotion: 0,
    commentCountForPromotion: 0,
    progress: 0,
    message: '',
  },
  notification: {
    detailedNoticeList: [
      {
        message: '',
        noticeId: 0,
        noticeType: '',
        postId: 0,
        createdDate: '1970.01.01',
        detailedPost: {
          author: {
            id: 0,
            identification: '0',
            nickname: '',
            rating: 'NEW_RECRUIT',
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
    ],
    simplePage: {
      currentPage: 0,
      totalElements: 0,
      totalPages: 0,
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
  [LOAD_MY_BOOKMARK_POSTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      myBookmark: action.payload,
    };
  },
  [LOAD_RATING_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [LOAD_NOTIFICATION_SUCCESS]: (state, action) => {
    return {
      ...state,
      notification: {
        ...action.payload,
      },
    };
  },
  [REMOVE_BOOKMARK]: (state, action) => {
    const { myBookmark, myPost } = state;
    const { payload: id } = action;
    const updateBookmark = myBookmark.posts.filter((post) => post.id !== id);
    const updateMyPost = myPost.posts.map((post) =>
      post.id === id
        ? {
            ...post,
            pressBookMark: false,
          }
        : { ...post },
    );

    return {
      ...state,
      myBookmark: {
        posts: updateBookmark,
        simplePage: myBookmark.simplePage,
      },
      myPost: {
        posts: updateMyPost,
        simplePage: myPost.simplePage,
      },
    };
  },
});

export default postReducer;
