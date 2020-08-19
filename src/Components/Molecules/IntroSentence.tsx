import React from 'react';
import { Rowbox, Colbox, Text } from '../Atoms';
import styled from 'styled-components/native';
import Layout from '~/constants/Layout';
import { WHITE } from '~/constants/Colors';
import badgePng from '@png/level_one_badge.png';
import Gagebar from './Gagebar';

const Badge = styled.Image`
  position: relative;
  left: ${`${Layout.width / 7}px`};
`;

const IntroSentence = () => {
  return (
    <>
      <Rowbox>
        <Colbox marginBottom="25px" marginTop="15px">
          <Text fontSize="38px" text="유머쪼랩ㅋ" fontWeight={800} color={WHITE} />
          <Text fontSize="38px" text="분발하자^^" fontWeight={100} color={WHITE} />
        </Colbox>
        {/* <Badge source={badgePng} /> */}
      </Rowbox>
      <Colbox marginBottom={`${Layout.height / 30}px`}>
        <Gagebar persentage={0.4} />
      </Colbox>
    </>
  );
};

export default IntroSentence;
