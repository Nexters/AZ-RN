import React from 'react';
import styled from 'styled-components/native';
import { MarginStyleProps } from '~/@types';
import { marginStyles } from '~/styles/mixin';
import { LIGHT_GREY } from '~/constants/Colors';
import { TouchableOpacity } from 'react-native';

const Text = styled.Text<StyleProps>`
  width: ${({ width }) => width ?? 'auto'};
  font-size: ${({ fontSize }) => fontSize ?? '15px'};
  color: ${({ color }) => color ?? `${LIGHT_GREY}`};
  font-weight: ${({ fontWeight }) => fontWeight ?? 'bold'};
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  flex-wrap: wrap;
  ${marginStyles};
`;

interface StyleProps extends MarginStyleProps {
  fontSize?: string;
  color?: string;
  fontWeight?: number;
  textAlign?: string;
  width?: string;
}

interface TextProps extends StyleProps {
  text: string;
  onPress?: () => void;
  numberOfLines?: number;
}

const TextViewer = ({
  fontSize,
  color,
  text,
  marginLeft,
  marginTop,
  marginBottom,
  marginRight,
  fontWeight,
  onPress,
  textAlign,
  numberOfLines,
  width,
}: TextProps) => {
  return onPress ? (
    <TouchableOpacity onPress={onPress}>
      <Text
        numberOfLines={numberOfLines ?? 100}
        fontSize={fontSize}
        color={color}
        marginLeft={marginLeft}
        marginTop={marginTop}
        marginBottom={marginBottom}
        marginRight={marginRight}
        textAlign={textAlign}
        fontWeight={fontWeight}
        width={width}>
        {text}
      </Text>
    </TouchableOpacity>
  ) : (
    <Text
      numberOfLines={numberOfLines ?? 100}
      fontSize={fontSize}
      color={color}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      textAlign={textAlign}
      fontWeight={fontWeight}
      width={width}>
      {text}
    </Text>
  );
};

export default TextViewer;
