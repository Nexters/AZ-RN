import React, { useState, useCallback } from 'react';
import { View } from 'react-native';

import {
  BackgroundContainer,
  SafeAreaContainer,
  SectionWrapper,
} from '~/Components/Templates';
import { Rowbox } from '~/Components/Atoms';
import { PURPLE } from '~/constants/Colors';
import { BottomLineTabNavi } from '~/Components/Molcules';
import { getUniqueKey } from '~/lib';
import naviBookmarkGreyPng from '@png/navi_bookmark_grey.png';
import naviBookmarkPurplePng from '@png/navi_bookmark_purple.png';
import naviSettingGreyPng from '@png/navi_setting_grey.png';
import naviSettingPurplePng from '@png/navi_setting_purple.png';

const Profile = () => {
  const [tabNavOptions, setTabNavOptions] = useState([
    {
      id: 1,
      isActivation: true,
      Tab: <View />,
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
      <SafeAreaContainer>
        <SectionWrapper>
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
      </SafeAreaContainer>
    </BackgroundContainer>
  );
};

export default Profile;
