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

const Scroll = styled.ScrollView``;
interface PostDetailProps {
  navigation: StackNavigationProp<LoginStackParams, 'PostDetail'>;
  route: RouteProp<LoginStackParams, 'PostDetail'>;
}

const PostDetail = ({ navigation, route }: PostDetailProps) => {
  const postDetailProps = route.params;

  const [keyboardHeigth] = useKeyboard();

  return (
    <NoSafeArea>
      <Scroll
        style={{
          marginBottom: keyboardHeigth,
        }}>
        <SectionWrapper justifyContent="flex-start">
          <PostDetailCard postDetailProps={postDetailProps} />
          <Colbox marginTop="15px">
            {Array.from({ length: 10 }, (_, index) => (
              <Comment
                key={getUniqueKey(index)}
                username="고나은"
                comment="나는 오늘도 눈물을 흘린다.."
                thumbnail="https://images.seoulstore.com/c8b8519076dc1bc46c55065cf7c3b95e.png"
              />
            ))}
          </Colbox>
        </SectionWrapper>
      </Scroll>
      <StickyKeyboard />
    </NoSafeArea>
  );
};

export default PostDetail;
