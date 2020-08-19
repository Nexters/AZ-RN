import React, { useState } from 'react';
import ProfileViewer from './ProfileViewer';

import { MiniPostCard, CommentLog, UnderBarArrow } from '~/Components/Molecules';
import naviBookmarkGreyPng from '@png/navi_bookmark_grey.png';
import naviBookmarkPurplePng from '@png/navi_bookmark_purple.png';
import naviSettingGreyPng from '@png/navi_setting_grey.png';
import naviSettingPurplePng from '@png/navi_setting_purple.png';

const ProfileContainer = () => {
  const postLog = {
    createdAt: 'createdAt',
    title: 'title',
    heartCount: 45,
    commentCount: 13,
  };
  const commentLog = {
    createdAt: 'createdAt',
    comment: 'ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏkkkkkㅏㅏㅏㅏ',
  };
  const [tabNavOptions, setTabNavOptions] = useState([
    {
      id: 1,
      isActivation: true,
      Tab: <MiniPostCard {...postLog} marginBottom="20px" />,
      name: '작성한 개그',
      inactivationIcon: naviSettingGreyPng,
      activationIcon: naviSettingPurplePng,
    },
    {
      id: 2,
      isActivation: false,
      Tab: <CommentLog {...commentLog} marginBottom="16px" />,
      name: '작성한 댓글 ',
      inactivationIcon: naviSettingGreyPng,
      activationIcon: naviSettingPurplePng,
    },
    {
      id: 3,
      isActivation: false,
      Tab: <MiniPostCard {...postLog} marginBottom="20px" />,
      name: '북마크',
      inactivationIcon: naviBookmarkGreyPng,
      activationIcon: naviBookmarkPurplePng,
    },
    {
      id: 4,
      isActivation: false,
      Tab: <UnderBarArrow title="로그아웃" />,
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

  return <ProfileViewer handleNavigation={handleNavigation} tabNavOptions={tabNavOptions} />;
};

export default ProfileContainer;
