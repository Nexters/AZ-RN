import React from 'react';
import styled from 'styled-components/native';
import { WHITE, DARK_GREY } from '~/constants/Colors';
import { Rowbox, Text, Colbox, Image } from '../Atoms';
import IconMsg from './IconMsg';
import heartPng from '@png/heart.png';
import commentPng from '@png/comment.png';
import crownPng from '@png/crown.png';

const Card = styled.View`
  margin-top: 14px;
  height: 300px;
  height: 240px;
  background-color: ${WHITE};
  border-radius: 25px;
  overflow: hidden;
`;

type PostCardProps = {
  username: string;
  createdAt: string;
  sentence: string;
  heartCount: number;
  commentCount: number;
  type: 'normal' | 'best';
};

const PostCard = ({
  username,
  createdAt,
  sentence,
  heartCount,
  commentCount,
  type,
}: PostCardProps) => {
  return (
    <Card>
      <Rowbox
        justifyContent="space-between"
        bgColor={type !== 'best' ? '#DDDDDD' : '#232323'}
        height="46px"
        paddingLeft="20px"
        paddingRight="20px">
        <Rowbox width="auto">
          <Rowbox
            width="auto"
            height="21px"
            paddingLeft="7px"
            paddingRight="7px"
            marginRight="6px"
            borderRadius="15px"
            bgColor="#DF84FF">
            <Text text="Level" fontSize="12px" fontWeight={700} color={WHITE} />
          </Rowbox>
          <Text
            text={username}
            fontSize="16px"
            fontWeight={800}
            color={type !== 'best' ? DARK_GREY : WHITE}
          />
          <>
            {type !== 'normal' && (
              <Image
                imgSrc={crownPng}
                marginLeft="4px"
                width="12px"
                height="9px"
              />
            )}
          </>
        </Rowbox>
        <Text
          text={createdAt}
          fontSize="12px"
          fontWeight={600}
          marginLeft="10px"
          color={type !== 'best' ? DARK_GREY : WHITE}
        />
      </Rowbox>
      <Colbox paddingLeft="20px" paddingRight="20px">
        <Rowbox
          justifyContent="center"
          align="center"
          width="100%"
          height="147px"
          marginBottom="9px">
          <Text
            text={sentence}
            fontSize="43px"
            fontWeight={800}
            color={DARK_GREY}
          />
        </Rowbox>
        <Rowbox>
          <IconMsg imgSrc={heartPng} height="20px" width="20px">
            <Text
              text={`${heartCount}개`}
              fontSize="11px"
              fontWeight={700}
              color={DARK_GREY}
              marginLeft="5px"
            />
          </IconMsg>
          <IconMsg
            imgSrc={commentPng}
            marginLeft="15px"
            height="16px"
            width="20px">
            <Text
              text={`${commentCount}개`}
              fontSize="11px"
              fontWeight={700}
              color={DARK_GREY}
              marginLeft="5px"
            />
          </IconMsg>
        </Rowbox>
      </Colbox>
    </Card>
  );
};

export default PostCard;
