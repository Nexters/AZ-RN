import React from 'react';
import styled from 'styled-components/native';

import pencilPng from '@png/pencil.png';
import Image from './Image';

const Touchable = styled.TouchableOpacity``;
const Write = styled.View`
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

const FloatingButton = () => {
  return (
    <Touchable>
      <Write>
        <Image imgSrc={pencilPng} />
      </Write>
    </Touchable>
  );
};

export default FloatingButton;
