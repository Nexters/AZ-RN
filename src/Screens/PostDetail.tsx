import React from 'react';
import styled from 'styled-components/native';
import { BackgroundContainer, SectionWrapper } from '~/Components/Templates';
import PostDetailCard from '~/Components/Molcules/PostDetailCard';
import { LoginStackParams } from '~/@types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

interface PostDetailProps {
  navigation: StackNavigationProp<LoginStackParams, 'PostDetail'>;
  route: RouteProp<LoginStackParams, 'PostDetail'>;
}

const PostDetail = ({ navigation, route }: PostDetailProps) => {
  const postDetailProps = route.params;
  return (
    <BackgroundContainer>
      <SectionWrapper>
        <PostDetailCard postDetailProps={postDetailProps} />
      </SectionWrapper>
    </BackgroundContainer>
  );
};

export default PostDetail;
