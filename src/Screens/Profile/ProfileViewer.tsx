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

type TabNavi = {
  id: number;
  isActivation: boolean;
  tab: React.ReactNode;
  name: string;
  inactivationIcon: any;
  activationIcon: any;
};
interface ProfileProps {
  tabNavOptions: TabNavi[];
  handleNavigation: (id: number) => void;
  ratingForPromotion: RatingForPromotion;
  nickname: string;
}
const ProfileViewer = ({
  handleNavigation,
  tabNavOptions,
  ratingForPromotion,
  nickname,
}: ProfileProps) => {
  return (
    <BackgroundContainer bgColor={GREY_DARK}>
      <SafeAreaContainer>
        <StickyScrollView stickyPosition={1}>
          <SectionWrapper bgColor={DARK_GREY} paddingBottom="20px">
            <ProfileSentence ratingForPromotion={ratingForPromotion} nickname={nickname} />
            <Rowbox justifyContent="space-between">
              {tabNavOptions.map(
                ({ isActivation, name, activationIcon, inactivationIcon, id }, index) => (
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
                    key={getUniqueKey(index)}
                  />
                ),
              )}
            </Rowbox>
          </SectionWrapper>
          <DeviceHeaderSticky />
          <DeviceSection>
            {tabNavOptions.map(
              ({ isActivation, tab, id }) =>
                isActivation && <React.Fragment key={getUniqueKey(id)}>{tab}</React.Fragment>,
            )}
          </DeviceSection>
        </StickyScrollView>
      </SafeAreaContainer>
    </BackgroundContainer>
  );
};

export default ProfileViewer;
