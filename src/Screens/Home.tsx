import React from 'react';
import styled from 'styled-components/native';
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
import { getUniqueKey } from '~/lib';

interface HomeProps {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
}

const PostWrapper = styled.View`
  background-color: ${GREY_DARK};
  padding-left: ${`${Layout.width / 18}px`};
  padding-right: ${`${Layout.width / 18}px`};
`;

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
      <FloatingButton />
    </BackgroundContainer>
  );
};

export default Home;
