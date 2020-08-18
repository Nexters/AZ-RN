import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import HomeViewer from './HomeViewer';
import { LoginStackParams } from '~/@types';
import { getPosts } from '~/api';

interface HomeProps {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
}

const HomeContainer = ({ navigation }: HomeProps) => {
  const dispatch = useDispatch();
  const sampleData = {
    username: 'username',
    createdAt: 'createdAt',
    sentence: 'sentence',
    heartCount: 45,
    commentCount: 13,
    type: 'best' as 'normal' | 'best',
  };
  const handleNavigateToPostWrite = () => {
    navigation.navigate('PostWrite');
  };
  const handleNavigateSetParams = () => {
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
      getPosts,
    };
  }, []);
  return (
    <HomeViewer
      sampleData={sampleData}
      handleNavigateToPostWrite={handleNavigateToPostWrite}
      handleNavigateSetParams={handleNavigateSetParams}
    />
  );
};

export default HomeContainer;
