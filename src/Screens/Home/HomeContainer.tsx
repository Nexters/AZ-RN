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
      postDetail: {
        post: { detailedPost },
        comment,
      },
    },
    loading: {
      LOAD_POST_DETAIL_LOADING: isPostDetailLoading,
      LOAD_COMMENTS_LOADING: isLoadCommentsLoading,
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
      ...getPosts,
      postId,
    };
    const comments = dispatch(getCommentsThunk(config));
    const detailedPost = dispatch(getPostDetailThunk(option));

    // const selected = posts.filter((post) => post.id === postId)[0];
    // navigation.navigate('PostDetail', {
    //   ...selected,
    // });
  };

  useEffect(() => {
    const config = {
      ...getPosts,
    };
    dispatch(getPostsThunk(config));
  }, []);

  useEffect(() => {
    if (
      !isLoadCommentsLoading &&
      !isPostDetailLoading &&
      isLoadCommentsLoading !== undefined &&
      isPostDetailLoading !== undefined
    ) {
      // navigation.navigate('PostDetail', {
      //   ...selected,
      // });
    }
  }, [isLoadCommentsLoading, isPostDetailLoading]);

  return (
    <HomeViewer
      posts={posts}
      handleNavigateToPostWrite={handleNavigateToPostWrite}
      handleNavigateToPostDeatil={handleNavigateToPostDeatil}
    />
  );
};

export default HomeContainer;
