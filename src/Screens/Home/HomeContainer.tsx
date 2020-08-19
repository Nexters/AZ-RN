import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import HomeViewer from './HomeViewer';
import { LoginStackParams } from '~/@types';
import { getPosts, getDetailedPost, getCommnets } from '~/api';
import { getPostsThunk, getPostDetailThunk, getCommentsThunk } from '~/store/modules/post/thunks';
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
  } = useSelector((state: RootState) => state);

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

    navigation.navigate('PostDetail', {
      ...detailedPost,
    });
  };

  useEffect(() => {
    const config = {
      ...getPosts,
    };
    dispatch(getPostsThunk(config));
  }, []);

  return (
    <HomeViewer
      posts={posts}
      handleNavigateToPostWrite={handleNavigateToPostWrite}
      handleNavigateToPostDeatil={handleNavigateToPostDeatil}
    />
  );
};

export default HomeContainer;
