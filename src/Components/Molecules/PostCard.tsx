import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import { WHITE, DARK_GREY } from '~/constants/Colors';
import { Rowbox, Text, Colbox, Image } from '../Atoms';
import crownPng from '@png/crown.png';
import HearAndComment from './HearAndComment';

const Card = styled.TouchableOpacity`
  margin-top: 14px;
  height: 100%;
  height: 240px;
  background-color: ${WHITE};
  border-radius: 25px;
  overflow: hidden;
`;

type PostCardProps = {
  nickname: string;
  createdDate: string;
  content: string;
  likes: number;
  commentCount: number;
  pressBookMark: boolean;
  pressLike: boolean;
  rating: string;
  type: 'normal' | 'best';
  id: number;
  onPress?: () => void;
};

const PostCard = ({
  nickname,
  createdDate,
  content,
  likes,
  commentCount,
  pressBookMark,
  pressLike,
  rating,
  type,
  id,
  onPress,
}: PostCardProps) => {
  const [fontStyle, setFontStyle] = useState({
    fontSize: '35px',
    lineHeight: '40px',
  });

  useLayoutEffect(() => {
    if (content.length < 13) {
      setFontStyle({
        fontSize: '35px',
        lineHeight: '40px',
      });
    } else if (content.length < 51) {
      setFontStyle({
        fontSize: '22px',
        lineHeight: '27px',
      });
    } else {
      setFontStyle({
        fontSize: '16px',
        lineHeight: '21px',
      });
    }
  }, []);
  return (
    <Card onPress={onPress}>
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
            text={nickname}
            fontSize="16px"
            fontWeight={800}
            color={type !== 'best' ? DARK_GREY : WHITE}
          />
          <>
            {type !== 'normal' && (
              <Image imgSrc={crownPng} marginLeft="4px" width="12px" height="9px" />
            )}
          </>
        </Rowbox>
        <Text
          text={createdDate}
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
          <Text text={content} {...fontStyle} color={DARK_GREY} />
        </Rowbox>
        <HearAndComment
          heartCount={likes}
          commentCount={commentCount}
          heartWidth="20px"
          heartHeight="20px"
          commentWidth="16px"
          commentHeight="20px"
        />
      </Colbox>
    </Card>
  );
};

export default PostCard;
