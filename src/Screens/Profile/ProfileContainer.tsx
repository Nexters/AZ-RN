import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import ProfileViewer from './ProfileViewer';
import {
  getCommnets,
  getDetailedPost,
  postComment,
  getMyComments,
  getMyPosts,
  getMyBookmarkPosts,
} from '~/api';
import { RootState } from '~/store/modules';
import { LoginStackParams } from '~/@types';
import {
  getCommentsThunk,
  getPostDetailThunk,
  postCommentThunk,
} from '~/store/modules/post/thunks';
import { logout } from '~/store/modules/auth/actions';
import {
  getMyCommentsThunk,
  getMyPostsThunk,
  getMyBookmarkPostsThunk,
} from '~/store/modules/user/thunks';
import naviBookmarkGreyPng from '@png/navi_bookmark_grey.png';
import naviBookmarkPurplePng from '@png/navi_bookmark_purple.png';
import naviSettingGreyPng from '@png/navi_setting_grey.png';
import naviSettingPurplePng from '@png/navi_setting_purple.png';
import naviPencilGreyPng from '@png/navi_pencil_grey.png';
import naviPencilPurplePng from '@png/navi_pencil_purple.png';
import { MiniPostCard, CommentLog, UnderBarArrow } from '~/Components/Molecules';
import { usePrevious } from '~/hooks';

interface ProfileProps {
  navigation: StackNavigationProp<LoginStackParams, 'Profile'>;
}
const ProfileContainer = ({ navigation }: ProfileProps) => {
  const dispatch = useDispatch();
  const {
    auth: {
      user: { id: userId, nickname },
    },
    user: { myComment, myPost, myBookmark, ratingForPromotion },
  } = useSelector((state: RootState) => state);

  const prevState = usePrevious({ myBookmark });

  const [isLoading, setIsLiading] = useState(false);
  const [number, setNumber] = useState(1);

  const loadMyComments = () => {
    setIsLiading(true);
    const config = {
      ...getMyComments,
      userId,
    };
    dispatch(getMyCommentsThunk(config));
    setIsLiading(false);
  };
  const loadMyPosts = () => {
    setIsLiading(true);
    const config = {
      ...getMyPosts,
      userId,
    };
    dispatch(getMyPostsThunk(config));
    setIsLiading(false);
  };
  const loadBookmark = () => {
    setIsLiading(true);
    const config = {
      ...getMyBookmarkPosts,
      userId,
    };
    dispatch(getMyBookmarkPostsThunk(config));
    setIsLiading(false);
  };

  const handleNavi = (id: number) => {
    if (id === 1) {
      return (
        <MiniPostCard
          postOption={myPost}
          handleNavigateToPostDeatil={handleNavigateToPostDeatil}
          marginBottom="20px"
        />
      );
    } else if (id === 2) {
      return (
        <CommentLog
          commentOption={myComment}
          handleNavigateToPostDeatil={handleNavigateToPostDeatil}
          marginBottom="16px"
        />
      );
    } else if (id === 3) {
      return (
        <MiniPostCard
          postOption={myBookmark}
          handleNavigateToPostDeatil={handleNavigateToPostDeatil}
          marginBottom="20px"
        />
      );
    } else {
      return <UnderBarArrow title="로그아웃" handleLogout={handleLogout} />;
    }
  };

  const handleNavigation = (id: number) => {
    setNumber(id);
    const update = tabNavOptions.map((option) =>
      option.id === id ? { ...option, isActivation: true } : { ...option, isActivation: false },
    );
    setTabNaviOptions(update);
  };

  const [tabNavOptions, setTabNaviOptions] = useState([
    {
      id: 1,
      isActivation: true,
      name: '작성한 개그',
      inactivationIcon: naviPencilGreyPng,
      activationIcon: naviPencilPurplePng,
    },
    {
      id: 2,
      isActivation: false,
      name: '작성한 댓글 ',
      inactivationIcon: naviSettingGreyPng,
      activationIcon: naviSettingPurplePng,
    },
    {
      id: 3,
      isActivation: false,
      name: '북마크',
      inactivationIcon: naviBookmarkGreyPng,
      activationIcon: naviBookmarkPurplePng,
    },
    {
      id: 4,
      isActivation: false,
      name: '설정',
      inactivationIcon: naviSettingGreyPng,
      activationIcon: naviSettingPurplePng,
    },
  ]);

  const handleNavigateToPostDeatil = async (postId: number) => {
    const config = {
      ...getCommnets,
      postId,
      currentPage: 1,
      size: 200,
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

  useEffect(() => {
    if (JSON.stringify(prevState?.myBookmark) !== JSON.stringify(myBookmark)) {
      loadBookmark();
      loadMyPosts();
    }
  }, [myBookmark]);

  return (
    <ProfileViewer
      handleNavigateToPostDeatil={handleNavigateToPostDeatil}
      ratingForPromotion={ratingForPromotion}
      nickname={nickname}
      handleLogout={handleLogout}
      myComment={myComment}
      myPost={myPost}
      myBookmark={myBookmark}
      tabNavOptions={tabNavOptions}
      handleNavigation={handleNavigation}
      number={number}
      handleNavi={handleNavi}
    />
  );
};

export default ProfileContainer;
