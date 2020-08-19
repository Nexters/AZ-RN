export default {
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
    post: {
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
    comment: {
      commentList: [
        {
          content: '',
          createdDate: '',
          id: 0,
          modifiedDate: '',
          postId: 0,
          writer: {
            id: 0,
            identification: '',
            nickname: '',
            rating: '',
          },
        },
      ],
      simplePage: {
        currentPage: 0,
        totalElements: 0,
        totalPages: 0,
      },
    },
  },
};
