import React from 'react';

import defaultProfileImg from '@png/level_one_profile.png';
import { WHITE } from '@constants/Colors';

import { Rowbox, Colbox, Image, Text } from '../Atoms';

interface CommentProps {
  thumbnail: string;
  username: string;
  comment: string;
}

const Comment = ({ thumbnail, username, comment }: CommentProps) => {
  return (
    <Rowbox marginBottom="20px">
      <Colbox marginRight="9px">
        <Image imgUrl={thumbnail} height="26px" width="27px" />
      </Colbox>
      <Colbox>
        <Text
          text={username}
          fontSize="15px"
          fontWeight={800}
          color={WHITE}
          marginBottom="3px"
        />
        <Text text={comment} fontSize="15px" fontWeight={300} color={WHITE} />
      </Colbox>
    </Rowbox>
  );
};

export default Comment;
