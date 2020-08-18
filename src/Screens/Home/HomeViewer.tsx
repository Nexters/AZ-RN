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
} from '~/Components/Molecules';
import { FloatingButton } from '~/Components/Atoms';
import { getUniqueKey, stackNavigate } from '~/lib';

interface HomeProps {
  sampleData: any;
  handleNavigateToPostWrite: () => void;
  handleNavigateSetParams: () => void;
}

const HomeViewer = ({
  sampleData,
  handleNavigateToPostWrite,
  handleNavigateSetParams,
}: HomeProps) => {
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
            <PostCard {...sampleData} key={getUniqueKey(index)} onPress={handleNavigateSetParams} />
          ))}
        </DeviceSection>
      </StickyScrollView>
      <FloatingButton navigate={handleNavigateToPostWrite} />
    </BackgroundContainer>
  );
};

export default HomeViewer;
