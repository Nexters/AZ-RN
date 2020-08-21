import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components/native';
import { useKeyboard } from 'react-native-keyboard-height';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { LoginStackParams, PostDetailParams } from '~/@types';
import { SectionWrapper, NoSafeArea } from '~/Components/Templates';
import PostDetailCard from '~/Components/Molecules/PostDetailCard';
import { Colbox, Toast } from '~/Components/Atoms';
import { Comment, StickyKeyboard } from '~/Components/Molecules';
import { getUniqueKey, callApi } from '~/lib';
import { useHandleInput } from '~/hooks';
import { RootState } from '~/store/modules';
import { useSelector, useDispatch } from 'react-redux';
import { TextInput, Platform } from 'react-native';
import {
  postLike,
  postBookmark,
  deleteBookmark,
  getDetailedPost,
  getMyBookmarkPosts,
  getMyPosts,
} from '~/api';
import { postLikeThunk, postBookmarkThunk, getPostDetailThunk } from '~/store/modules/post/thunks';
import { getMyBookmarkPostsThunk, getMyPostsThunk } from '~/store/modules/user/thunks';

const Scroll = styled.ScrollView``;
interface PostDetailProps {
  navigation: StackNavigationProp<LoginStackParams, 'PostDetail'>;
  route: RouteProp<LoginStackParams, 'PostDetail'>;
}

const PostDetail = ({ navigation, route }: PostDetailProps) => {
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

  const inputRef = useRef<TextInput>();

  const handleOnPress = () => {
    handlePostCommnet(post.detailedPost.id, commentBinder.text);
    if (Platform.OS === 'ios') inputRef.current?.setNativeProps({ text: '' });
    else inputRef.current?.clear();
  };
  const loadBookmark = () => {
    const config = {
      ...getMyBookmarkPosts,
      userId,
    };
    dispatch(getMyBookmarkPostsThunk(config));
  };
  const loadMyPosts = () => {
    const config = {
      ...getMyPosts,
      userId,
    };
    dispatch(getMyPostsThunk(config));
  };
  const handlePressLike = (postId: number) => {
    const config = {
      ...postLike,
      postId,
    };
    dispatch(postLikeThunk(config));
    loadBookmark();
    loadMyPosts();
  };

  const handlePressBookmark = (postId: number) => {
    const config = {
      ...postBookmark,
      postId,
    };
    dispatch(postBookmarkThunk(config));
    loadBookmark();
    loadMyPosts();
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

  return (
    <NoSafeArea>
      <Toast
        visible={showPostCommentToast}
        animation={true}
        hideOnPress={true}
        message="댓글 작성 완료"
      />
      <Scroll
        style={{
          marginBottom: keyboardHeigth,
        }}>
        <SectionWrapper justifyContent="flex-start">
          <PostDetailCard
            postDetailProps={post}
            handlePressLike={handlePressLike}
            handlePressBookmark={handlePressBookmark}
            handlePressDeleteBookmark={handlePressDeleteBookmark}
          />
          <Colbox marginTop="15px">
            {commentList.length > 0 &&
              commentList.map(({ id, content, createdDate, modifiedDate, postId, writer }) => (
                <Comment
                  key={getUniqueKey(id)}
                  content={content}
                  createdDate={createdDate}
                  id={id}
                  modifiedDate={modifiedDate}
                  postId={postId}
                  writer={writer}
                />
              ))}
          </Colbox>
        </SectionWrapper>
      </Scroll>
      <StickyKeyboard inputRef={inputRef} inputBinder={commentBinder} onPress={handleOnPress} />
    </NoSafeArea>
  );
};

export default PostDetail;
