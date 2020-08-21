import React, { useState } from 'react';
import styled from 'styled-components/native';
import { RefreshControl } from 'react-native';

import { BackgroundContainer } from '~/Components/Templates';
import { NotiCard } from '~/Components/Molecules';
import { getUniqueKey } from '~/lib';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '~/store/modules';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginStackParams } from '~/@types';
import {
  getCommentsThunk,
  getPostDetailThunk,
  postCommentThunk,
} from '~/store/modules/post/thunks';
import { getCommnets, getDetailedPost, postComment, getNotifications } from '~/api';
import { getNotificationsThunk } from '~/store/modules/user/thunks';

const ScrollView = styled.ScrollView``;

interface NotificationProps {
  navigation: StackNavigationProp<LoginStackParams, 'Notification'>;
}

const Notification = ({ navigation }: NotificationProps) => {
  const dispatch = useDispatch();
  const {
    auth: {
      user: { id: userId },
    },
    user: {
      notification: { detailedNoticeList: notifications },
    },
  } = useSelector((state: RootState) => state);

  const [isLoading, setIsLoading] = useState(false);

  const loadNotifications = () => {
    const notiConfig = {
      ...getNotifications,
      userId,
    };
    dispatch(getNotificationsThunk(notiConfig));
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

    const handlePostCommnet = async (postId: number, comment: string) => {
      setIsLoading(true);
      const config = {
        ...postComment,
        comment,
        postId,
      };
      await dispatch(postCommentThunk(config));
      setIsLoading(false);
    };

    navigation.navigate('PostDetail', {
      handlePostCommnet,
    });
  };

  return (
    <BackgroundContainer>
      <ScrollView
        refreshControl={
          <RefreshControl
            tintColor="#f8f8ff"
            refreshing={isLoading}
            onRefresh={loadNotifications}
          />
        }>
        {notifications.length > 0 &&
          notifications.map(({ message, noticeId, noticeType, detailedPost, createdDate }) => (
            <NotiCard
              onPress={() => {
                handleNavigateToPostDeatil(detailedPost.id);
              }}
              type={noticeType === 'COMMENT' ? '댓글' : '좋아요'}
              content={detailedPost.content}
              description={message}
              createdAt={createdDate}
              key={getUniqueKey(noticeId)}
            />
          ))}
      </ScrollView>
    </BackgroundContainer>
  );
};

export default Notification;
