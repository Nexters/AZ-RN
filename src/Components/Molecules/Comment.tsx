import React from 'react';

import defaultProfileImg from '@png/level_one_profile.png';
import { WHITE } from '@constants/Colors';

import { Rowbox, Colbox, Image, Text } from '../Atoms';
import { CommentList } from '~/store/modules/post/types';

const Comment = ({ content, createdDate, id, modifiedDate, postId, writer }: CommentList) => {
  return (
    <Rowbox marginBottom="20px" width="100%" align="flex-start">
      <Colbox marginRight="9px" width="auto">
        <Image imgSrc={defaultProfileImg} height="26px" width="27px" />
      </Colbox>
      <Colbox width="88%">
        <Text
          text={writer.nickname}
          fontSize="15px"
          fontWeight={800}
          color={WHITE}
          marginBottom="3px"
        />
        <Rowbox justifyContent="space-between" align="flex-start">
          <Text width="70%" text={content} fontSize="15px" fontWeight={300} color={WHITE} />
          <Text text={createdDate} fontSize="15px" fontWeight={300} color={WHITE} />
        </Rowbox>
      </Colbox>
    </Rowbox>
  );
};

export default Comment;
