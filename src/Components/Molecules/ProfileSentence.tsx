import React from 'react';
import { Rowbox, Image, Text } from '../Atoms';
import { WHITE } from '~/constants/Colors';
import { RatingForPromotion } from '~/store/modules/user/types';
import levelOneBadge from '@png/level_one_badge_type_one.png';
import levelTwoBadge from '@png/level_two_badge_type_one.png';
import levelThreeBadge from '@png/level_three_badge_type_one.png';
import levelFourBadge from '@png/level_four_badge_type_one.png';
import levelFiveBadge from '@png/level_five_badge_type_one.png';
import { getLevelType } from '~/lib';

interface ProfileSentenceProps {
  ratingForPromotion: RatingForPromotion;
  nickname: string;
}
const ProfileSentence = ({ ratingForPromotion, nickname }: ProfileSentenceProps) => {
  const { currentRating } = ratingForPromotion;

  const handleBadgeType = () => {
    if (currentRating === 'ASSISTANT_MANAGE') return levelTwoBadge;
    else if (currentRating === 'DEPARTMENT_HEAD') return levelThreeBadge;
    else if (currentRating === 'MANAGING_DIRECTOR') return levelFourBadge;
    else if (currentRating === 'BOSS') return levelFiveBadge;
    else return levelOneBadge;
  };

  return (
    <Rowbox marginBottom="40px" marginTop="20px">
      <Image imgSrc={handleBadgeType()} width="92px" height="72px" marginRight="15px" />
      <Rowbox width="auto">
        <Text
          text={getLevelType(currentRating)}
          fontSize="30px"
          fontWeight={800}
          color={WHITE}
          marginRight="7px"
        />
        <Text text={`${nickname}님`} fontSize="30px" fontWeight={100} color={WHITE} />
      </Rowbox>
    </Rowbox>
  );
};

export default ProfileSentence;
