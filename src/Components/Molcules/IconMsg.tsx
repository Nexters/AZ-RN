import React from 'react';
import { Image } from '../Atoms';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import { MarginStyleProps } from '~/@types';
import { marginStyles } from '~/styles/mixin';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  ${marginStyles};
`;

interface IconMsgProps extends MarginStyleProps {
  children: React.ReactChild;
  imgSrc: ImageSourcePropType;
}

const IconMsg = ({
  children,
  imgSrc,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}: IconMsgProps) => {
  return (
    <Container
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}>
      <Image imgSrc={imgSrc} />
      {children}
    </Container>
  );
};

export default IconMsg;
