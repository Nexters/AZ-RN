import React from 'react';
import styled from 'styled-components/native';

import pencilPng from '@png/pencil.png';
import Image from './Image';

const Touchable = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: #b029df;
  box-shadow: 0px 6px 7px rgba(0, 0, 0, 0.4);
`;

type FloatingButtonProps = {
  navigate: () => void;
};

const FloatingButton = ({ navigate }: FloatingButtonProps) => {
  return (
    <Touchable onPress={navigate}>
      <Image imgSrc={pencilPng} width="27px" height="27px" />
    </Touchable>
  );
};

export default FloatingButton;
