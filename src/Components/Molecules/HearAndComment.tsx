import React from 'react';
import { Rowbox, Text } from '../Atoms';
import IconMsg from './IconMsg';
import { DARK_GREY } from '~/constants/Colors';
import heartPng from '@png/heart.png';
import emptyHeartPng from '@png/empty_heart.png';
import commentPng from '@png/comment.png';

type HearAndCommentProps = {
  heartCount: number;
  commentCount: number;
  heartWidth: string;
  heartHeight: string;
  commentWidth: string;
  commentHeight: string;
  pressLike: boolean;
  onPressHeart?: () => void;
};

const HearAndComment = ({
  heartCount,
  commentCount,
  heartWidth,
  heartHeight,
  commentWidth,
  commentHeight,
  pressLike,
  onPressHeart,
}: HearAndCommentProps) => {
  return (
    <Rowbox width="auto">
      <IconMsg
        imgSrc={pressLike ? heartPng : emptyHeartPng}
        onPress={pressLike ? undefined : onPressHeart}
        height={heartWidth}
        width={heartHeight}>
        <Text
          text={`${heartCount}개`}
          fontSize="11px"
          fontWeight={700}
          color={DARK_GREY}
          marginLeft="5px"
        />
      </IconMsg>
      <IconMsg imgSrc={commentPng} marginLeft="15px" height={commentWidth} width={commentHeight}>
        <Text
          text={`${commentCount}개`}
          fontSize="11px"
          fontWeight={700}
          color={DARK_GREY}
          marginLeft="5px"
        />
      </IconMsg>
    </Rowbox>
  );
};

export default HearAndComment;
