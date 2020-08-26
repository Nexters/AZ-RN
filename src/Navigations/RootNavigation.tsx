import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '~/store/modules';
import LoggedInStack from './Stack/LoggedInStack';
import NonLoginStack from './Stack/NonLoginStack';
import { AppLoading } from 'expo';
import { getRatingStatus, getPosts, getPopularPosts } from '~/api';
import { getPopularPostsThunk, getPostsThunk } from '~/store/modules/post/thunks';
import { getMyRatingThunk } from '~/store/modules/user/thunks';

const Container = styled.View`
  flex: 1;
`;

const RootNavigation = () => {
  const dispatch = useDispatch();
  const {
    auth: {
      accessToken: { token },
      user: { id: userId },
    },
  } = useSelector((state: RootState) => state);

  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    const ratingConfig = {
      ...getRatingStatus,
      userId,
    };
    const postConfig = {
      ...getPosts,
      currentPage: 1,
      size: 200,
    };
    const option = {
      ...getPopularPosts,
      currentPage: 1,
      size: 200,
    };
    await dispatch(getPopularPostsThunk(option));
    await dispatch(getPostsThunk(postConfig));
    await dispatch(getMyRatingThunk(ratingConfig));
  };
  const onFinish = () => {
    setIsReady(true);
  };

  return (
    <Container>
      {isReady ? (
        token ? (
          <LoggedInStack />
        ) : (
          <NonLoginStack />
        )
      ) : (
        <AppLoading
          startAsync={loadAssets}
          onFinish={onFinish}
          onError={(e) => {
            console.log(e);
          }}
        />
      )}
    </Container>
  );
};

export default RootNavigation;
