import React from 'react';
import styled from 'styled-components/native';
import { WHITE } from '~/constants/Colors';
import { MarginStyleProps } from '~/@types';
import { Rowbox, Text, Image } from '../Atoms';
import crownPng from '@png/crown.png';
import HearAndComment from './HearAndComment';
import { marginStyles } from '~/styles/mixin';

const Container = styled.View<MarginStyleProps>`
  width: 100%;
  height: 87px;
  justify-content: space-between;
  padding: 20px 18px 20px 18px;
  background: ${WHITE};
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  ${marginStyles};
`;

interface MiniPostCard extends MarginStyleProps {
  createdAt: string;
  title: string;
  heartCount: number;
  commentCount: number;
  marginBottom?: string;
}
const MiniPostCard = ({
  createdAt,
  title,
  heartCount,
  commentCount,
  marginBottom,
}: MiniPostCard) => {
  return (
    <Container marginBottom={marginBottom}>
      <Rowbox justifyContent="space-between">
        <Rowbox width="230px">
          <Text fontSize="16px" fontWeight={800} text={title} color="#333333" />
        </Rowbox>
        <Image imgSrc={crownPng} marginLeft="4px" width="22px" height="18px" />
      </Rowbox>
      <Rowbox justifyContent="space-between">
        <HearAndComment
          heartCount={heartCount}
          commentCount={commentCount}
          heartWidth="20px"
          heartHeight="20px"
          commentWidth="16px"
          commentHeight="16px"
        />
        <Text fontSize="12px" fontWeight={300} text={createdAt} />
      </Rowbox>
    </Container>
  );
};

export default MiniPostCard;
