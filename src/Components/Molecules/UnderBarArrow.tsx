import React from 'react';
import { Rowbox, Text, Colbox, Image } from '../Atoms';
import HorizontalBar from '../Atoms/HorizontalBar';
import { WHITE } from '~/constants/Colors';
import rightArrowPng from '@png/right_arrow.png';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  justify-content: space-between;
`;

interface UnderBarArrow {
  title: string;
}

const UnderBarArrow = ({ title }: UnderBarArrow) => {
  return (
    <TouchableOpacity>
      <Container>
        <Colbox>
          <Rowbox
            width="100%"
            justifyContent="space-between"
            marginBottom="16px">
            <Text text={title} fontSize="16px" fontWeight={800} color={WHITE} />
            <Image imgSrc={rightArrowPng} width="8px" height="16px" />
          </Rowbox>
          <HorizontalBar color={WHITE} marginBottom="16px" />
        </Colbox>
      </Container>
    </TouchableOpacity>
  );
};

export default UnderBarArrow;
