import React from 'react';
import { Rowbox, Image, Text } from '../Atoms';
import levelOneBadgePng from '@png/level_one_badge_type_one.png';
import { WHITE } from '~/constants/Colors';

const ProfileSentence = () => {
  return (
    <Rowbox marginBottom="40px">
      <Image
        imgSrc={levelOneBadgePng}
        width="92px"
        height="72px"
        marginRight="15px"
      />
      <Rowbox width="auto">
        <Text
          text="신입"
          fontSize="30px"
          fontWeight={800}
          color={WHITE}
          marginRight="7px"
        />
        <Text text="웅웅님" fontSize="30px" fontWeight={100} color={WHITE} />
      </Rowbox>
    </Rowbox>
  );
};

export default ProfileSentence;
