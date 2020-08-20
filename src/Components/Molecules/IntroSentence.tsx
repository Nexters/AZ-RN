import React from 'react';
import { Rowbox, Colbox, Text, Image } from '../Atoms';
import Layout from '~/constants/Layout';
import { WHITE } from '~/constants/Colors';
import levelOneBadge from '@png/level_one_badge.png';
import levelTwoBadge from '@png/level_two_badge.png';
import levelThreeBadge from '@png/level_three_badge.png';
import levelFourBadge from '@png/level_four_badge.png';
import levelFiveBadge from '@png/level_five_badge.png';
import Gagebar from './Gagebar';
import { RatingForPromotion } from '~/store/modules/user/types';

interface IntroSentenceProps {
  ratingForPromotion: RatingForPromotion;
}

const IntroSentence = ({ ratingForPromotion }: IntroSentenceProps) => {
  const {
    currentRating,
    nextRating,
    postCountForPromotion,
    commentCountForPromotion,
    progress,
    message,
  } = ratingForPromotion;

  const splitMessages = message.split('\n');

  const handleBadgeType = () => {
    if (currentRating === 'ASSISTANT_MANAGE') return levelTwoBadge;
    else if (currentRating === 'DEPARTMENT_HEAD') return levelThreeBadge;
    else if (currentRating === 'MANAGING_DIRECTOR') return levelFourBadge;
    else if (currentRating === 'BOSS') return levelFiveBadge;
    else return levelOneBadge;
  };

  return (
    <>
      <Rowbox marginTop="20px">
        <Colbox marginBottom="25px" marginTop="15px">
          <Text fontSize="35px" text={splitMessages[0]} fontWeight={800} color={WHITE} />
          <Text fontSize="35px" text={splitMessages[1]} fontWeight={100} color={WHITE} />
        </Colbox>
        <Image
          imgSrc={handleBadgeType()}
          width="110px"
          height="110px"
          left={`${Layout.width / 4}px`}
        />
      </Rowbox>
      <Colbox marginBottom={`${Layout.height / 30}px`}>
        <Gagebar
          persentage={progress}
          postCountForPromotion={postCountForPromotion}
          commentCountForPromotion={commentCountForPromotion}
        />
      </Colbox>
    </>
  );
};

export default IntroSentence;
