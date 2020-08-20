import React from 'react';

import {
  SectionWrapper,
  BackgroundContainer,
  StickyScrollView,
  DeviceSection,
  SafeAreaContainer,
} from '~/Components/Templates';
import {
  DeviceHeaderSticky,
  IntroSentence,
  PostCard,
  HomeStickyInner,
} from '~/Components/Molecules';
import { FloatingButton, Toast } from '~/Components/Atoms';
import { getUniqueKey } from '~/lib';
import { Posts } from '~/store/modules/post/types';
import { GREY_DARK, DARK_GREY } from '~/constants/Colors';

interface HomeProps {
  posts: Posts[];
  handleNavigateToPostWrite: () => void;
  handleNavigateToPostDeatil: (postId: number) => void;
  showCreatePostToast: boolean;
}

const HomeViewer = ({
  posts,
  handleNavigateToPostWrite,
  handleNavigateToPostDeatil,
  showCreatePostToast,
}: HomeProps) => {
  return (
    <>
      <Toast
        visible={showCreatePostToast}
        animation={true}
        hideOnPress={true}
        message="게시글 작성 완료"
      />
      <BackgroundContainer bgColor={GREY_DARK}>
        <SafeAreaContainer>
          <StickyScrollView stickyPosition={1}>
            <BackgroundContainer bgColor={DARK_GREY}>
              <SectionWrapper marginBottom="25px">
                <IntroSentence />
              </SectionWrapper>
            </BackgroundContainer>
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
                  type="normal"
                  key={getUniqueKey(index)}
                  onPress={() => {
                    handleNavigateToPostDeatil(post.id);
                  }}
                />
              ))}
            </DeviceSection>
          </StickyScrollView>
          <FloatingButton navigate={handleNavigateToPostWrite} />
        </SafeAreaContainer>
      </BackgroundContainer>
    </>
  );
};

export default HomeViewer;
