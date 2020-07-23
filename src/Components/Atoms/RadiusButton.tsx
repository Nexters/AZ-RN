import React from 'react';
import styled from 'styled-components/native';
import { MarginStyleProps } from '~/@types';
import { PURPLE, DARK_GREY } from '~/constants/Colors';
import { marginStyles } from '~/styles/mixin';
import { Text } from '~/Components/Atoms';

const Container = styled.TouchableOpacity<StyleProps>`
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => height && height};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : `${DARK_GREY}`)};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  ${marginStyles};
`;

interface StyleProps extends MarginStyleProps {
  width?: number;
  height: number;
  bgColor?: string;
  borderRadius: number;
}

interface RadiusButtonProps extends StyleProps {
  text: string;
  color?: string;
  fontSize?: number;
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
