import React from 'react';
import styled from 'styled-components/native';
import { WHITE, DARK_GREY } from '~/constants/Colors';
import { Rowbox, Text } from '../Atoms';
import HorizontalBar from '../Atoms/HorizontalBar';
import IconMsg from './IconMsg';
import heartPng from '@png/heart.png';
import commentPng from '@png/comment.png';

const Card = styled.View`
  margin-top: 20px;
  padding: 26px 24px 26px 24px;
  height: 316px;
  background-color: ${WHITE};
  border-radius: 25px;
`;
const Post = styled.View``;

type PostCardProps = {
  username: string;
  createdAt: string;
  sentence: string;
  heartCount: number;
  commentCount: number;
};

const PostCard = ({
  username,
  createdAt,
  sentence,
  heartCount,
  commentCount,
}: PostCardProps) => {
  return (
    <Card>
      <Rowbox>
        <Text
          text={username}
          fontSize="16px"
          fontWeight={800}
          color={DARK_GREY}
        />
        <Text
          text={createdAt}
          fontSize="11px"
          fontWeight={300}
          marginLeft="10px"
        />
      </Rowbox>
      <HorizontalBar marginTop="22px" />
      <Post>
        <Text
          text={sentence}
          fontSize="43px"
          fontWeight={800}
          color={DARK_GREY}
        />
      </Post>
      <Rowbox>
        <IconMsg imgSrc={heartPng}>
          <Text
            text={`${heartCount}개`}
            fontSize="11px"
            fontWeight={700}
            color={DARK_GREY}
            marginLeft="5px"
          />
        </IconMsg>
        <IconMsg imgSrc={commentPng} marginLeft="15px">
          <Text
            text={`${commentCount}개`}
            fontSize="11px"
            fontWeight={700}
            color={DARK_GREY}
            marginLeft="5px"
          />
        </IconMsg>
      </Rowbox>
    </Card>
  );
};

export default PostCard;
