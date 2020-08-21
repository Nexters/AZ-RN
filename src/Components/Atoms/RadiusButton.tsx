import React from 'react';
import styled from 'styled-components/native';
import { MarginStyleProps } from '~/@types';
import { DARK_GREY } from '~/constants/Colors';
import { marginStyles } from '~/styles/mixin';
import Text from './Text';

const Container = styled.TouchableOpacity<StyleProps>`
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height && height};
  background-color: ${({ bgColor }) => bgColor ?? `${DARK_GREY}`};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  ${marginStyles};
`;

interface StyleProps extends MarginStyleProps {
  width?: string;
  height: string;
  bgColor?: string;
  borderRadius: string;
}

interface RadiusButtonProps extends StyleProps {
  text: string;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  onPress?: () => void;
}

const RadiusButton = ({
  width,
  height,
  bgColor,
  color,
  fontSize,
  text,
  onPress,
  marginLeft,
  marginTop,
  marginBottom,
  marginRight,
  borderRadius,
  fontWeight,
}: RadiusButtonProps) => {
  return (
    <Container
      width={width}
      height={height}
      bgColor={bgColor}
      onPress={onPress}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      borderRadius={borderRadius}>
      <Text color={color} text={text} fontSize={fontSize} fontWeight={fontWeight} />
    </Container>
  );
};

export default RadiusButton;
