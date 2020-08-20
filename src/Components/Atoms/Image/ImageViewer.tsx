import React from 'react';
import styled from 'styled-components/native';

import { MarginStyleProps } from '@types';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import { marginStyles } from '~/styles/mixin';

const Image = styled.Image<StyleProps>`
  ${marginStyles};
  width: ${({ imgWidth }) => imgWidth ?? '100%'};
  height: ${({ imgHeight }) => imgHeight ?? '100%'};
  left: ${({ left }) => left ?? '0px'};
`;
const AutoImage = styled.Image<StyleProps>`
  ${marginStyles};
`;

interface StyleProps extends MarginStyleProps {
  imgWidth?: string;
  imgHeight?: string;
  left?: string;
}
interface ImageProps extends StyleProps {
  imgSrc?: ImageSourcePropType;
  onPress?: () => void;
  width?: string;
  height?: string;
  imgUrl?: string;
}

const ImageViewer = ({
  imgSrc,
  imgUrl,
  marginLeft,
  marginTop,
  marginBottom,
  marginRight,
  onPress,
  width,
  height,
  left,
}: ImageProps) => {
  const ImgType = width ? (
    <Image
      resizeMode="contain"
      source={imgSrc ? imgSrc : { uri: imgUrl }}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      imgWidth={width}
      imgHeight={height}
      left={left}
    />
  ) : (
    <AutoImage
      resizeMode="contain"
      source={imgSrc ? imgSrc : { uri: imgUrl }}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      left={left}
    />
  );
  return onPress ? <TouchableOpacity onPress={onPress}>{ImgType}</TouchableOpacity> : ImgType;
};

export default ImageViewer;
