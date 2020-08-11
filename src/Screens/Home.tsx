import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { LoginStackParams } from '@types';
import {
  SectionWrapper,
  BackgroundContainer,
  StickyScrollView,
  DeviceSection,
} from '~/Components/Templates';
import {
  DeviceHeaderSticky,
  IntroSentence,
  PostCard,
  HomeStickyInner,
} from '~/Components/Molcules';
import { FloatingButton } from '~/Components/Atoms';
import { getUniqueKey, stackNavigate } from '~/lib';

interface HomeProps {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
}

type Type = 'normal' | 'best';
const Home = ({ navigation }: HomeProps) => {
  const sampleData = {
    username: 'username',
    createdAt: 'createdAt',
    sentence: 'sentence',
    heartCount: 45,
    commentCount: 13,
    type: 'best' as Type,
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
  return (
    <BackgroundContainer>
      <StickyScrollView stickyPosition={1}>
        <SectionWrapper marginBottom="25px">
          <IntroSentence />
        </SectionWrapper>
        <DeviceHeaderSticky>
          <HomeStickyInner />
        </DeviceHeaderSticky>
        <DeviceSection>
          {Array.from({ length: 5 }, (_, index) => (
            <PostCard
              {...sampleData}
              key={getUniqueKey(index)}
              onPress={handleNavigateSetParams}
            />
          ))}
        </DeviceSection>
      </StickyScrollView>
      <FloatingButton navigate={handleNavigateToPostWrite} />
    </BackgroundContainer>
  );
};

export default Home;
