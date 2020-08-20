import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import HomeViewer from './HomeViewer';
import { LoginStackParams } from '~/@types';
import {
  getPosts,
  getDetailedPost,
  getCommnets,
  postComment,
  getMyPosts,
  getMyComments,
  getMyBookmarkPosts,
  getRatingStatus,
  getNotifications,
} from '~/api';
import {
  getPostsThunk,
  getPostDetailThunk,
  getCommentsThunk,
  postCommentThunk,
} from '~/store/modules/post/thunks';
import { RootState } from '~/store/modules';
import {
  getMyCommentsThunk,
  getMyPostsThunk,
  getMyBookmarkPostsThunk,
  getMyRatingThunk,
  getNotificationsThunk,
} from '~/store/modules/user/thunks';

interface HomeProps {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
}

const HomeContainer = ({ navigation }: HomeProps) => {
  const dispatch = useDispatch();
  const {
    auth: {
      user: { id: userId },
    },
    post: {
      postList: { posts },
      postDetail: {
        comment: { commentList },
      },
    },
    user: { ratingForPromotion },
    loading: { 'post/CREATE_POST_LOADING': createPostIsLoading },
  } = useSelector((state: RootState) => state);

  const [showCreatePostToast, setShowCreatePostToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigateToPostWrite = () => {
    navigation.navigate('PostWrite');
  };

  const loadPosts = () => {
    setIsLoading(true);
    const config = {
      ...getPosts,
      currentPage: 1,
      size: 20,
    };
    dispatch(getPostsThunk(config));
    setIsLoading(false);
  };
  const loadRating = () => {
    const config = {
      ...getRatingStatus,
      userId,
    };
    dispatch(getMyRatingThunk(config));
  };
  const loadMyComments = () => {
    const config = {
      ...getMyComments,
      userId,
    };
    dispatch(getMyCommentsThunk(config));
  };
  const loadMyPosts = () => {
    const config = {
      ...getMyPosts,
      userId,
    };
    dispatch(getMyPostsThunk(config));
  };
  const loadBookmark = () => {
    const config = {
      ...getMyBookmarkPosts,
      userId,
    };
    dispatch(getMyBookmarkPostsThunk(config));
  };
  const loadNotifications = () => {
    const config = {
      ...getNotifications,
      userId,
    };
    dispatch(getNotificationsThunk(config));
  };

  const handleNavigateToPostDeatil = async (postId: number) => {
    const config = {
      ...getCommnets,
      postId,
      currentPage: 1,
      size: 200,
    };
    const option = {
      ...getDetailedPost,
      postId,
    };
    await dispatch(getCommentsThunk(config));
    await dispatch(getPostDetailThunk(option));

    const handlePostCommnet = (postId: number, comment: string) => {
      const config = {
        ...postComment,
        comment,
        postId,
      };
      dispatch(postCommentThunk(config));
    };
    navigation.navigate('PostDetail', {
      handlePostCommnet,
    });
  };

  useEffect(() => {
    loadPosts();
    loadRating();
    loadMyComments();
    loadMyPosts();
    loadBookmark();
    loadNotifications();
  }, []);
  useEffect(() => {
    loadRating();
  }, [posts, commentList]);
  useEffect(() => {
    loadMyPosts();
  }, [posts]);
  useEffect(() => {
    loadMyComments();
  }, [commentList]);
  useEffect(() => {
    if (createPostIsLoading) {
      setTimeout(() => {
        setShowCreatePostToast(true);
      }, 200);
      setTimeout(() => {
        setShowCreatePostToast(false);
      }, 3000);
    }
  }, [createPostIsLoading]);

  return (
    <HomeViewer
      posts={posts}
      handleNavigateToPostWrite={handleNavigateToPostWrite}
      handleNavigateToPostDeatil={handleNavigateToPostDeatil}
      showCreatePostToast={showCreatePostToast}
      ratingForPromotion={ratingForPromotion}
      loadPosts={loadPosts}
      isLoading={isLoading}
    />
  );
};

export default HomeContainer;
