import React, { useState, createRef, useEffect, useLayoutEffect } from 'react';
import { Platform, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { useKeyboard } from 'react-native-keyboard-height';
import { FontAwesome5 } from '@expo/vector-icons';

import { LoginStackParams, PostDetailParams } from '~/@types';
import { RootState } from '~/store/modules';
import { useHandleInput } from '~/hooks';
import { postLike, postBookmark, deleteBookmark, getDetailedPost } from '~/api';
import { postLikeThunk, postBookmarkThunk, getPostDetailThunk } from '~/store/modules/post/thunks';
import { callApi } from '~/lib';
import PostDetailViewer from './PostDetailViewer';
import { removeBookmark } from '~/store/modules/user/actions';
import { activationLike, activationBookmark } from '~/store/modules/post/actions';

interface PostDetailProps {
  navigation: StackNavigationProp<LoginStackParams, 'PostDetail'>;
  route: RouteProp<LoginStackParams, 'PostDetail'>;
}

const PostDetailContainer = ({ navigation, route }: PostDetailProps) => {
  const { handlePostCommnet } = route.params as PostDetailParams;
  const dispatch = useDispatch();
  const {
    loading: { 'post/POST_COMMENT_LOADING': postCommentIsLoading },
    post: {
      postDetail: {
        comment: { commentList },
        post,
      },
    },
    auth: {
      accessToken: { token: accessToken },
      user: { id: userId },
    },
  } = useSelector((state: RootState) => state);

  const [keyboardHeigth] = useKeyboard();

  const { bind: commentBinder } = useHandleInput('');

  const [showPostCommentToast, setShowPostCommentToast] = useState(false);

  const inputRef = createRef<TextInput>();

  const handleOnPress = () => {
    handlePostCommnet(post.detailedPost.id, commentBinder.text);
    if (Platform.OS === 'ios') inputRef.current?.setNativeProps({ text: '' });
    else inputRef.current?.clear();
  };

  const handlePressLike = (postId: number) => {
    dispatch(activationLike(postId));
    const config = {
      ...postLike,
      postId,
    };
    dispatch(postLikeThunk(config));
  };

  const handlePressBookmark = (postId: number) => {
    dispatch(activationBookmark(postId));
    const config = {
      ...postBookmark,
      postId,
    };
    dispatch(postBookmarkThunk(config));
  };
  const handlePressDeleteBookmark = (postId: number) => {
    const config = {
      ...deleteBookmark,
      postId,
      headers: {
        accessToken,
      },
    };
    const option = {
      ...getDetailedPost,
      postId,
    };
    callApi(config);
    dispatch(getPostDetailThunk(option));
    dispatch(removeBookmark(postId));
  };
  useEffect(() => {
    if (postCommentIsLoading) {
      setTimeout(() => {
        setShowPostCommentToast(true);
      }, 200);
      setTimeout(() => {
        setShowPostCommentToast(false);
      }, 3000);
    }
  }, [postCommentIsLoading]);

  useLayoutEffect(() => {
    Platform.OS === 'web' &&
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesome5 name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
        ),
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      });
  }, []);
  return (
    <PostDetailViewer
      showPostCommentToast={showPostCommentToast}
      keyboardHeigth={keyboardHeigth}
      post={post}
      handlePressLike={handlePressLike}
      handlePressBookmark={handlePressBookmark}
      handlePressDeleteBookmark={handlePressDeleteBookmark}
      commentList={commentList}
      inputRef={inputRef}
      commentBinder={commentBinder}
      handleOnPress={handleOnPress}
    />
  );
};

export default PostDetailContainer;
