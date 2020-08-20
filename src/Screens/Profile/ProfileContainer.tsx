import React, { useState, useEffect } from 'react';
import ProfileViewer from './ProfileViewer';

import { MiniPostCard, CommentLog, UnderBarArrow } from '~/Components/Molecules';
import naviBookmarkGreyPng from '@png/navi_bookmark_grey.png';
import naviBookmarkPurplePng from '@png/navi_bookmark_purple.png';
import naviSettingGreyPng from '@png/navi_setting_grey.png';
import naviSettingPurplePng from '@png/navi_setting_purple.png';
import naviPencilGreyPng from '@png/navi_pencil_grey.png';
import naviPencilPurplePng from '@png/navi_pencil_purple.png';
import {
  getMyPosts,
  getMyComments,
  getCommnets,
  getDetailedPost,
  postComment,
  getMyBookmarkPosts,
} from '~/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store/modules';
import {
  getMyCommentsThunk,
  getMyPostsThunk,
  getMyBookmarkPostsThunk,
} from '~/store/modules/user/thunks';
import { StackNavigationProp } from '@react-navigation/stack';
import { LoginStackParams } from '~/@types';
import {
  getCommentsThunk,
  getPostDetailThunk,
  postCommentThunk,
} from '~/store/modules/post/thunks';
import { logout } from '~/store/modules/auth/actions';

interface ProfileProps {
  navigation: StackNavigationProp<LoginStackParams, 'Profile'>;
}
const ProfileContainer = ({ navigation }: ProfileProps) => {
  const dispatch = useDispatch();
  const {
    auth: {
      user: { id: userId },
    },
    user: { myComment, myPost, myBookmark },
  } = useSelector((state: RootState) => state);

  const handleNavigateToPostDeatil = async (postId: number) => {
    const config = {
      ...getCommnets,
      postId,
    };
    const option = {
      ...getDetailedPost,
      postId,
    };
    const comment = await dispatch(getCommentsThunk(config));
    const post = await dispatch(getPostDetailThunk(option));
    const detailedPost = {
      post,
      comment,
    };

    const handlePostCommnet = (postId: number, comment: string) => {
      const config = {
        ...postComment,
        comment,
        postId,
      };
      dispatch(postCommentThunk(config));
    };

    navigation.navigate('PostDetail', {
      ...detailedPost,
      handlePostCommnet,
    });
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  const ReactElements = [
    <MiniPostCard
      key="0"
      postOption={myPost}
      handleNavigateToPostDeatil={handleNavigateToPostDeatil}
      marginBottom="20px"
    />,
    <CommentLog
      key="1"
      commentOption={myComment}
      handleNavigateToPostDeatil={handleNavigateToPostDeatil}
      marginBottom="16px"
    />,
    <MiniPostCard
      key="2"
      postOption={myBookmark}
      handleNavigateToPostDeatil={handleNavigateToPostDeatil}
      marginBottom="20px"
    />,
  ];

  const [tabNavOptions, setTabNaviOptions] = useState([
    {
      id: 1,
      isActivation: true,
      tab: (
        <MiniPostCard
          postOption={myPost}
          handleNavigateToPostDeatil={handleNavigateToPostDeatil}
          marginBottom="20px"
        />
      ),
      name: '작성한 개그',
      inactivationIcon: naviPencilGreyPng,
      activationIcon: naviPencilPurplePng,
    },
    {
      id: 2,
      isActivation: false,
      tab: (
        <CommentLog
          commentOption={myComment}
          handleNavigateToPostDeatil={handleNavigateToPostDeatil}
          marginBottom="16px"
        />
      ),
      name: '작성한 댓글 ',
      inactivationIcon: naviSettingGreyPng,
      activationIcon: naviSettingPurplePng,
    },
    {
      id: 3,
      isActivation: false,
      tab: (
        <MiniPostCard
          postOption={myBookmark}
          handleNavigateToPostDeatil={handleNavigateToPostDeatil}
          marginBottom="20px"
        />
      ),
      name: '북마크',
      inactivationIcon: naviBookmarkGreyPng,
      activationIcon: naviBookmarkPurplePng,
    },
    {
      id: 4,
      isActivation: false,
      tab: <UnderBarArrow title="로그아웃" handleLogout={handleLogout} />,
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
    setTabNaviOptions(updateTabOptions);
  };

  useEffect(() => {
    const update = tabNavOptions.map((option, index) => ({
      ...option,
      tab: ReactElements[index],
    }));
    setTabNaviOptions(update);
  }, [myComment, myPost, myBookmark]);

  return <ProfileViewer handleNavigation={handleNavigation} tabNavOptions={tabNavOptions} />;
};

export default ProfileContainer;
