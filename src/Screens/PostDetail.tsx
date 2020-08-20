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
import { getUniqueKey } from '~/lib';
import { useHandleInput } from '~/hooks';
import { RootState } from '~/store/modules';
import { useSelector } from 'react-redux';
import { TextInput, Platform } from 'react-native';

const Scroll = styled.ScrollView``;
interface PostDetailProps {
  navigation: StackNavigationProp<LoginStackParams, 'PostDetail'>;
  route: RouteProp<LoginStackParams, 'PostDetail'>;
}

const PostDetail = ({ navigation, route }: PostDetailProps) => {
  const { post, handlePostCommnet } = route.params as PostDetailParams;
  const {
    loading: { 'post/POST_COMMENT_LOADING': postCommentIsLoading },
    post: {
      postDetail: {
        comment: { commentList },
      },
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
          <PostDetailCard postDetailProps={post} />
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
