import React from 'react';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { LoginStackParams } from '@types';
import { SectionWrapper, BackgroundContainer } from '~/Components/Templates';
import { HomeSticky, IntroSentence, PostCard } from '~/Components/Molcules';
import { GREY_DARK } from '~/constants/Colors';
import { FloatingButton } from '~/Components/Atoms';
import Layout from '~/constants/Layout';
import { getUniqueKey } from '~/lib';

interface HomeProps {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
}

const StickScrollView = styled.ScrollView``;
const PostWrapper = styled.View`
  background-color: ${GREY_DARK};
  padding-left: ${`${Layout.width / 20}px`};
  padding-right: ${`${Layout.width / 20}px`};
`;

const Home = ({ navigation }: HomeProps) => {
  const sampleData = {
    username: 'username',
    createdAt: 'createdAt',
    sentence: 'sentence',
    heartCount: 45,
    commentCount: 13,
  };
  return (
    <BackgroundContainer>
      <StickScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}>
        <SectionWrapper>
          <IntroSentence />
        </SectionWrapper>
        <HomeSticky />
        <PostWrapper>
          {Array.from({ length: 5 }, (_, index) => (
            <PostCard {...sampleData} key={getUniqueKey(index)} />
          ))}
        </PostWrapper>
      </StickScrollView>
      <FloatingButton />
    </BackgroundContainer>
  );
};

export default Home;
