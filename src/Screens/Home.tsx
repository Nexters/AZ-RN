import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { LoginStackParams } from '@types';
import { SectionWrapper, BackgroundContainer } from '~/Components/Templates';
import { HomeSticky, IntroSentence } from '~/Components/Molcules';
import { WHITE, GREY_DARK } from '~/constants/Colors';
import { FloatingButton } from '~/Components/Atoms';
import Layout from '~/constants/Layout';

interface HomeProps {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
}

const StickScrollView = styled.ScrollView``;
const PostWrapper = styled.View`
  background-color: ${GREY_DARK};
  padding-left: ${`${Layout.width / 20}px`};
  padding-right: ${`${Layout.width / 20}px`};
`;
const Card = styled.View`
  margin-top: 20px;
  height: 316px;
  background-color: ${WHITE};
  border-radius: 25px;
`;

const Home = ({ navigation }: HomeProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
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
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </PostWrapper>
      </StickScrollView>
      <FloatingButton />
    </BackgroundContainer>
  );
};

export default Home;
