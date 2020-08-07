import React, { useState } from 'react';
import { View } from 'react-native';

import {
  BackgroundContainer,
  SafeAreaContainer,
  SectionWrapper,
  StickyScrollView,
  DeviceSection,
} from '~/Components/Templates';
import { Rowbox, Image, Text } from '~/Components/Atoms';
import { PURPLE, WHITE } from '~/constants/Colors';
import {
  BottomLineTabNavi,
  DeviceHeaderSticky,
  MiniPostCard,
  ProfileSentence,
} from '~/Components/Molcules';
import { getUniqueKey } from '~/lib';
import naviBookmarkGreyPng from '@png/navi_bookmark_grey.png';
import naviBookmarkPurplePng from '@png/navi_bookmark_purple.png';
import naviSettingGreyPng from '@png/navi_setting_grey.png';
import naviSettingPurplePng from '@png/navi_setting_purple.png';
import levelOneBadgePng from '@png/level_one_badge_type_one.png';

const Profile = () => {
  const sampleData = {
    createdAt: 'createdAt',
    title: 'title',
    heartCount: 45,
    commentCount: 13,
  };
  const [tabNavOptions, setTabNavOptions] = useState([
    {
      id: 1,
      isActivation: true,
      Tab: <MiniPostCard {...sampleData} marginBottom="20px" />,
      name: '작성한 개그',
      inactivationIcon: naviSettingGreyPng,
      activationIcon: naviSettingPurplePng,
    },
    {
      id: 2,
      isActivation: false,
      Tab: <View />,
      name: '작성한 댓글 ',
      inactivationIcon: naviSettingGreyPng,
      activationIcon: naviSettingPurplePng,
    },
    {
      id: 3,
      isActivation: false,
      Tab: <View />,
      name: '북마크',
      inactivationIcon: naviBookmarkGreyPng,
      activationIcon: naviBookmarkPurplePng,
    },
    {
      id: 4,
      isActivation: false,
      Tab: <View />,
      name: '설정',
      inactivationIcon: naviSettingGreyPng,
      activationIcon: naviSettingPurplePng,
    },
  ]);

  const handleNavigation = (id: number) => {
    const updateTabOptions = tabNavOptions.map((tabOption) => {
      if (tabOption.id !== id) {
        return {
          ...tabOption,
          isActivation: false,
        };
      } else {
        return {
          ...tabOption,
          isActivation: true,
        };
      }
    });
    setTabNavOptions(updateTabOptions);
  };

  return (
    <BackgroundContainer>
      <StickyScrollView stickyPosition={1}>
        <SectionWrapper marginBottom="20px">
          <ProfileSentence />
          <Rowbox justifyContent="space-between">
            {tabNavOptions.map(
              (
                { isActivation, name, activationIcon, inactivationIcon, id },
                index,
              ) => (
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
          <>
            {tabNavOptions.map(
              ({ isActivation, Tab }, index) => isActivation && Tab,
            )}
          </>
        </DeviceSection>
      </StickyScrollView>
    </BackgroundContainer>
  );
};

export default Profile;
