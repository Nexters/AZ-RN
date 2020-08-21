import React from 'react';
import { Rowbox, Text, Image } from '../Atoms';
import { WHITE } from '~/constants/Colors';
import styled from 'styled-components/native';
import crownPng from '@png/crown.png';
import disableCrownPng from '@png/disable_crown.png';

const Touchable = styled.TouchableOpacity``;

interface HomeStickyInnerProps {
  isPopular: boolean;
  handleIsPopular: () => void;
}

const HomeStickyInner = ({ isPopular, handleIsPopular }: HomeStickyInnerProps) => {
  return (
    <Rowbox width="100%" justifyContent="space-between" paddingBottom="10px">
      <Text text="개그 목록" fontSize="18px" fontWeight={700} color={WHITE} />
      <Touchable onPress={handleIsPopular}>
        <Rowbox
          borderRadius="50px"
          border="1px solid #999999"
          bgColor="#5A5A5A"
          width="90px"
          height="27px"
          justifyContent="center">
          <Text
            text="명예의 전당"
            fontSize="12px"
            fontWeight={200}
            color={isPopular ? WHITE : '#999999'}
          />
          <Image
            imgSrc={isPopular ? crownPng : disableCrownPng}
            marginLeft="4px"
            width="12px"
            height="9px"
          />
        </Rowbox>
      </Touchable>
    </Rowbox>
  );
};

export default HomeStickyInner;
