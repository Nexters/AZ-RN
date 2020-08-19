import React from 'react';

import defaultProfileImg from '@png/level_one_profile.png';
import { WHITE } from '@constants/Colors';

import { Rowbox, Colbox, Image, Text } from '../Atoms';
import { CommentList } from '~/store/modules/post/types';

const Comment = ({ content, createdDate, id, modifiedDate, postId, writer }: CommentList) => {
  return (
    <Rowbox marginBottom="20px">
      <Colbox marginRight="9px">
        <Image imgUrl={defaultProfileImg} height="26px" width="27px" />
      </Colbox>
      <Colbox>
        <Text
          text={writer.nickname}
          fontSize="15px"
          fontWeight={800}
          color={WHITE}
          marginBottom="3px"
        />
        <Text text={content} fontSize="15px" fontWeight={300} color={WHITE} />
      </Colbox>
    </Rowbox>
  );
};

export default Comment;
