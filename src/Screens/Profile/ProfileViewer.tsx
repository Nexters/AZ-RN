import React from 'react';

import {
  BackgroundContainer,
  SectionWrapper,
  StickyScrollView,
  DeviceSection,
  SafeAreaContainer,
} from '~/Components/Templates';
import { Rowbox } from '~/Components/Atoms';
import { PURPLE, GREY_DARK, DARK_GREY } from '~/constants/Colors';
import { BottomLineTabNavi, DeviceHeaderSticky, ProfileSentence } from '~/Components/Molecules';
import { getUniqueKey } from '~/lib';
import { RatingForPromotion } from '~/store/modules/user/types';
import { MiniPostCard, CommentLog, UnderBarArrow } from '~/Components/Molecules';
import { Post, Comment } from '~/store/modules/post/types';

type TabNavi = {
  id: number;
  isActivation: boolean;
  name: string;
  inactivationIcon: any;
  activationIcon: any;
};
interface ProfileProps {
  ratingForPromotion: RatingForPromotion;
  nickname: string;
  handleNavigateToPostDeatil: (postId: number) => Promise<void>;
  myComment: Comment;
  myPost: Post;
  myBookmark: Post;
  tabNavOptions: TabNavi[];
  handleLogout: () => void;
  handleNavigation: (id: number) => void;
  number: number;
  handleNavi: (id: number) => JSX.Element;
}
const ProfileViewer = ({
  ratingForPromotion,
  nickname,
  handleNavigateToPostDeatil,
  myComment,
  myPost,
  myBookmark,
  handleLogout,
  tabNavOptions,
  handleNavigation,
  number,
  handleNavi,
}: ProfileProps) => {
  return (
    <BackgroundContainer bgColor={GREY_DARK}>
      <SafeAreaContainer>
        <StickyScrollView stickyPosition={1}>
          <SectionWrapper bgColor={DARK_GREY} paddingBottom="20px">
            <ProfileSentence ratingForPromotion={ratingForPromotion} nickname={nickname} />
            <Rowbox justifyContent="space-between">
              {tabNavOptions.map(({ isActivation, activationIcon, inactivationIcon, id, name }) => (
                <BottomLineTabNavi
                  text={name}
                  fontWeight={500}
                  fontSize="13px"
                  onPress={() => {
                    handleNavigation(id);
                  }}
                  imgSrc={isActivation ? activationIcon : inactivationIcon}
                  isActivation={isActivation}
                  activationColor={PURPLE}
                  key={getUniqueKey(id)}
                />
              ))}
            </Rowbox>
          </SectionWrapper>
          <DeviceHeaderSticky />
          <DeviceSection>{handleNavi(number)}</DeviceSection>
        </StickyScrollView>
      </SafeAreaContainer>
    </BackgroundContainer>
  );
};

export default ProfileViewer;
