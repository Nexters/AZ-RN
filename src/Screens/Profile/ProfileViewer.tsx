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

type TabNavi = {
  id: number;
  isActivation: boolean;
  Tab: JSX.Element;
  name: string;
  inactivationIcon: any;
  activationIcon: any;
};
interface ProfileProps {
  tabNavOptions: TabNavi[];
  handleNavigation: (id: number) => void;
}
const ProfileViewer = ({ handleNavigation, tabNavOptions }: ProfileProps) => {
  return (
    <BackgroundContainer bgColor={GREY_DARK}>
      <SafeAreaContainer>
        <StickyScrollView stickyPosition={1}>
          <BackgroundContainer bgColor={DARK_GREY}>
            <SectionWrapper bgColor={DARK_GREY} marginBottom="20px">
              <ProfileSentence />
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
          </BackgroundContainer>
          <DeviceHeaderSticky />
          <DeviceSection>
            {tabNavOptions.map(
              ({ isActivation, Tab }, index) =>
                isActivation &&
                Array.from({ length: 20 }, (_, i) =>
                  React.cloneElement(Tab, { key: getUniqueKey(i) }),
                ),
            )}
          </DeviceSection>
        </StickyScrollView>
      </SafeAreaContainer>
    </BackgroundContainer>
  );
};

export default ProfileViewer;
