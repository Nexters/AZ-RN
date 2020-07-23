import React from 'react';
import styled from 'styled-components/native';

import { MarginStyleProps } from '@types';
import { ImageSourcePropType } from 'react-native';
import { marginStyles } from '~/styles/mixin';

const Image = styled.Image<MarginStyleProps>`
  ${marginStyles};
`;

interface ImageProps extends MarginStyleProps {
  imgSrc: ImageSourcePropType;
}

const ImageViewer = ({ imgSrc, marginLeft, marginTop, marginBottom, marginRight }: ImageProps) => {
  return (
    <Image
      resizeMode="contain"
      source={imgSrc}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
    />
  );
};

export default ImageViewer;
