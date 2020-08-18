import React from 'react';

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
import { getUniqueKey } from '~/lib';
import { Posts } from '~/store/modules/post/types';

interface HomeProps {
  posts: Posts[];
  handleNavigateToPostWrite: () => void;
  handleNavigateToPostDeatil: () => void;
}

const HomeViewer = ({
  posts,
  handleNavigateToPostWrite,
  handleNavigateToPostDeatil,
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
          {posts?.map((post, index) => (
            <PostCard
              id={post.id}
              nickname={post.author.nickname}
              createdDate={post.createdDate}
              content={post.content}
              likes={post.likes}
              commentCount={post.commentCount}
              pressBookMark={post.pressBookMark}
              pressLike={post.pressLike}
              rating={post.author.rating}
              type="best"
              key={getUniqueKey(index)}
              onPress={handleNavigateToPostDeatil}
            />
          ))}
        </DeviceSection>
      </StickyScrollView>
      <FloatingButton navigate={handleNavigateToPostWrite} />
    </BackgroundContainer>
  );
};

export default HomeViewer;
