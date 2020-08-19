import React from 'react';
import styled from 'styled-components/native';
import { WHITE, DARK_GREY } from '~/constants/Colors';
import { Rowbox, Colbox, Text, Image } from '../Atoms';
import HearAndComment from './HearAndComment';
import emptyBookmark from '@png/empty_bookmark.png';
import Layout from '~/constants/Layout';
import { PostDetail } from '~/store/modules/post/types';

const Card = styled.View`
  width: 100%;
  height: 285px;
  padding: ${`${Layout.width / 21}px`};
  justify-content: space-between;
  align-items: center;
  background-color: ${WHITE};
  border-radius: 25px;
  overflow: hidden;
`;

interface PostDetailCard {
  postDetailProps: PostDetail;
}

const PostDetailCard = ({ postDetailProps }: PostDetailCard) => {
  const {
    id,
    author,
    content,
    likes,
    bookMarkCount,
    commentCount,
    pressLike,
    pressBookMark,
    createdDate,
    modifiedDate,
  } = postDetailProps.detailedPost;
  return (
    <Card>
      <Rowbox justifyContent="flex-end">
        <Image imgSrc={emptyBookmark} width="16px" height="17px" />
      </Rowbox>
      <Colbox>
        <Rowbox align="center" width="100%" height="182px" marginBottom="9px">
          <Text
            text={content}
            fontSize="43px"
            fontWeight={800}
            color={DARK_GREY}
            textAlign="center"
          />
        </Rowbox>
      </Colbox>
      <Rowbox width="100%" justifyContent="space-between">
        <Rowbox width="auto">
          <HearAndComment
            heartCount={likes}
            commentCount={commentCount}
            heartWidth="20px"
            heartHeight="20px"
            commentWidth="16px"
            commentHeight="20px"
          />
        </Rowbox>
        <Colbox align="flex-end">
          <Text text={author.nickname} fontSize="14px" fontWeight={800} color={DARK_GREY} />
          <Text text={createdDate} fontSize="12px" fontWeight={300} color={DARK_GREY} />
        </Colbox>
      </Rowbox>
    </Card>
  );
};

export default PostDetailCard;
