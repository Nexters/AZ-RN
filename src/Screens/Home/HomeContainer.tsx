import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import HomeViewer from './HomeViewer';
import { LoginStackParams } from '~/@types';
import { getPosts } from '~/api';
import { getPostsThunk } from '~/store/modules/post/thunks';
import { RootState } from '~/store/modules';

interface HomeProps {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
}

const HomeContainer = ({ navigation }: HomeProps) => {
  const dispatch = useDispatch();
  const {
    post: { posts, simplePage },
  } = useSelector((state: RootState) => state);

  const handleNavigateToPostWrite = () => {
    navigation.navigate('PostWrite');
  };
  const handleNavigateToPostDeatil = () => {
    navigation.navigate('PostDetail', {
      heartCount: 40,
      commentCount: 30,
      username: '신입 가나다',
      createdAt: '1시간전',
      content: '소나무가 삐지면?\n칫솔',
      isPressLike: true,
      comments: [
        {
          username: '신입 카파하',
          comment: '룰루룰루',
        },
      ],
    });
  };

  useEffect(() => {
    const config = {
      ...getPosts,
    };
    dispatch(getPostsThunk(config));
  }, []);

  useEffect(() => {
    console.log('posts', posts);
  }, [posts]);
  return (
    <HomeViewer
      posts={posts}
      handleNavigateToPostWrite={handleNavigateToPostWrite}
      handleNavigateToPostDeatil={handleNavigateToPostDeatil}
    />
  );
};

export default HomeContainer;
