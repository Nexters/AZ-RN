import { createReducer } from 'typesafe-actions';

import { PostActions, RootPost, Posts } from './types';
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
  POST_LIKE_SUCCESS,
  POST_BOOKMARK_SUCCESS,
  ACTIVATION_BOOKMARK,
  ACTIVATION_LIKE,
  LOAD_POPULAR_POST_SUCCESS,
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
      postDetail: {
        comment: { commentList, simplePage },
        post: { detailedPost },
      },
      postList,
      popularPosts: { posts: popularPosts, simplePage: popularSimplePage },
    } = state;

    const { detailedComment } = action.payload;
    const appendComment = [...commentList, detailedComment];

    const handleUpdatePosts = (posts: Posts[]) => {
      const updatePosts = posts.map((post) => {
        if (post.id === detailedComment.postId) {
          return { ...post, commentCount: post.commentCount + 1 };
        } else {
          return { ...post };
        }
      });
      return updatePosts;
    };
    const updatePosts = handleUpdatePosts(postList.posts);
    const updatePopularPosts = handleUpdatePosts(popularPosts);
    return {
      ...state,
      postList: {
        posts: updatePosts,
        simplePage: postList.simplePage,
      },
      popularPosts: {
        posts: updatePopularPosts,
        simplePage: popularSimplePage,
      },
      postDetail: {
        post: {
          detailedPost: {
            ...detailedPost,
            commentCount: detailedPost.commentCount + 1,
          },
        },
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
  [POST_LIKE_SUCCESS]: (state, action) => {
    return {
      ...state,
    };
  },
  [POST_BOOKMARK_SUCCESS]: (state, action) => {
    return {
      ...state,
    };
  },
  [ACTIVATION_BOOKMARK]: (state, action) => {
    const { postDetail } = state;
    return {
      ...state,
      postDetail: {
        post: {
          detailedPost: {
            ...postDetail.post.detailedPost,
            pressBookMark: true,
          },
        },
        comment: postDetail.comment,
      },
    };
  },
  [ACTIVATION_LIKE]: (state, action) => {
    const {
      postList: { posts, simplePage },
      postDetail: { comment, post },
      popularPosts: { posts: updatePopularPosts, simplePage: popularSimplePage },
    } = state;
    const { payload: postId } = action;
    const updatePosts = posts.map((post) =>
      post.id === postId
        ? {
            ...post,
            pressLike: true,
          }
        : post,
    );
    return {
      ...state,
      postList: {
        posts: updatePosts,
        simplePage,
      },
      popularPosts: {
        posts: updatePopularPosts,
        simplePage: popularSimplePage,
      },
      postDetail: {
        post: {
          detailedPost: {
            ...post.detailedPost,
            pressLike: true,
          },
        },
        comment: comment,
      },
    };
  },
  [LOAD_POPULAR_POST_SUCCESS]: (state, action) => {
    return {
      ...state,
      popularPosts: {
        ...action.payload,
      },
    };
  },
});

export default postReducer;
