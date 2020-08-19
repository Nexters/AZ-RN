import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import HomeViewer from './HomeViewer';
import { LoginStackParams } from '~/@types';
import { getPosts, getDetailedPost, getCommnets, postComment } from '~/api';
import {
  getPostsThunk,
  getPostDetailThunk,
  getCommentsThunk,
  postCommentThunk,
} from '~/store/modules/post/thunks';
import { RootState } from '~/store/modules';

interface HomeProps {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
}

const HomeContainer = ({ navigation }: HomeProps) => {
  const dispatch = useDispatch();
  const {
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
    };
    const option = {
      ...getDetailedPost,
      postId,
    };
    const comment = await dispatch(getCommentsThunk(config));
    const post = await dispatch(getPostDetailThunk(option));
    const detailedPost = {
      post,
      comment,
    };

    const handlePostCommnet = (postId: number, comment: string) => {
      const config = {
        ...postComment,
        comment,
        postId,
      };
      dispatch(postCommentThunk(config));
    };

    navigation.navigate('PostDetail', {
      ...detailedPost,
      handlePostCommnet,
    });
  };

  useEffect(() => {
    const config = {
      ...getPosts,
    };
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
