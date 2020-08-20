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
    },
    loading: { 'post/CREATE_POST_LOADING': createPostIsLoading },
  } = useSelector((state: RootState) => state);

  const [showCreatePostToast, setShowCreatePostToast] = useState(false);

  const handleNavigateToPostWrite = () => {
    navigation.navigate('PostWrite');
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
    const config = {
      ...getPosts,
      currentPage: 1,
      size: 200,
    };
    const postsConfig = {
      ...getMyPosts,
      userId,
    };
    const commentsConfig = {
      ...getMyComments,
      userId,
    };
    const bookmarkConfig = {
      ...getMyBookmarkPosts,
      userId,
    };
    dispatch(getMyCommentsThunk(commentsConfig));
    dispatch(getMyPostsThunk(postsConfig));
    dispatch(getMyBookmarkPostsThunk(bookmarkConfig));
    dispatch(getPostsThunk(config));
  }, []);

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
    />
  );
};

export default HomeContainer;
