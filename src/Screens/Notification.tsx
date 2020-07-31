import React from 'react';
import styled from 'styled-components/native';

import { BackgroundContainer } from '~/Components/Templates';
import { NotiCard } from '~/Components/Molcules';
import { getUniqueKey } from '~/lib';

const ScrollView = styled.ScrollView``;
const Notification = () => {
  return (
    <BackgroundContainer>
      <ScrollView>
        {Array.from({ length: 5 }, (_, index) => (
          <NotiCard
            onPress={() => {
              console.log('Notifiation');
            }}
            type="좋아요"
            content="밤에 성시경이 두명이라면?"
            description="작성한 게시글이 좋아요를 받았습니다"
            createdAt="5분전"
            key={getUniqueKey(index)}
          />
        ))}
      </ScrollView>
    </BackgroundContainer>
  );
};

export default Notification;
