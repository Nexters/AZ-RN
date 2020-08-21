import { RootPost } from './types';

export default {
  postList: {
    posts: [],
    simplePage: {
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
    },
  },
  popularPosts: {
    posts: [],
    simplePage: {
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
    },
  },
  postDetail: {
    post: {
      detailedPost: {
        author: {
          id: 0,
          identification: '',
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
    comment: {
      commentList: [],
      simplePage: {
        currentPage: 0,
        totalElements: 0,
        totalPages: 0,
      },
    },
  },
} as RootPost;
