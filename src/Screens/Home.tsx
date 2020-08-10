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
  const handleNavigate = () => {
    stackNavigate(navigation, 'PostWrite');
  };
  return (
    <BackgroundContainer>
      <StickyScrollView stickyPosition={1}>
        <SectionWrapper>
          <IntroSentence />
        </SectionWrapper>
        <DeviceHeaderSticky>
          <HomeStickyInner />
        </DeviceHeaderSticky>
        <DeviceSection>
          {Array.from({ length: 5 }, (_, index) => (
            <PostCard {...sampleData} key={getUniqueKey(index)} />
          ))}
        </DeviceSection>
      </StickyScrollView>
      <FloatingButton navigate={handleNavigate} />
    </BackgroundContainer>
  );
};

export default Home;
