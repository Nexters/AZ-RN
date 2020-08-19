import React from 'react';
import styled from 'styled-components/native';
import { useKeyboard } from 'react-native-keyboard-height';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { LoginStackParams } from '~/@types';
import { SectionWrapper, NoSafeArea } from '~/Components/Templates';
import PostDetailCard from '~/Components/Molecules/PostDetailCard';
import { Colbox } from '~/Components/Atoms';
import { Comment, StickyKeyboard } from '~/Components/Molecules';
import { getUniqueKey } from '~/lib';
import { DetailedPost } from '~/store/modules/post/types';

const Scroll = styled.ScrollView``;
interface PostDetailProps {
  navigation: StackNavigationProp<LoginStackParams, 'PostDetail'>;
  route: RouteProp<LoginStackParams, 'PostDetail'>;
}

const PostDetail = ({ navigation, route }: PostDetailProps) => {
  const { post, comment } = route.params as DetailedPost;

  const [keyboardHeigth] = useKeyboard();

  return (
    <NoSafeArea>
      <Scroll
        style={{
          marginBottom: keyboardHeigth,
        }}>
        <SectionWrapper justifyContent="flex-start">
          <PostDetailCard postDetailProps={post} />
          <Colbox marginTop="15px">
            {comment.commentList.map(
              ({ id, content, createdDate, modifiedDate, postId, writer }) => (
                <Comment
                  key={getUniqueKey(id)}
                  content={content}
                  createdDate={createdDate}
                  id={id}
                  modifiedDate={modifiedDate}
                  postId={postId}
                  writer={writer}
                />
              ),
            )}
          </Colbox>
        </SectionWrapper>
      </Scroll>
      <StickyKeyboard />
    </NoSafeArea>
  );
};

export default PostDetail;
