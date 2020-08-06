import React from 'react';
import styled from 'styled-components/native';
import { MarginStyleProps } from '~/@types';
import { marginStyles } from '~/styles/mixin';
import { LIGHT_GREY } from '~/constants/Colors';

const Text = styled.Text<StyleProps>`
  font-size: ${({ fontSize }) => fontSize ?? '15px'};
  color: ${({ color }) => color ?? `${LIGHT_GREY}`};
  font-weight: ${({ fontWeight }) => fontWeight ?? 'bold'};
  ${marginStyles};
`;

interface StyleProps extends MarginStyleProps {
  fontSize?: string;
  color?: string;
  fontWeight?: number;
}

interface TextProps extends StyleProps {
  text: string;
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
}: TextProps) => {
  return (
    <Text
      numberOfLines={1}
      fontSize={fontSize}
      color={color}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      fontWeight={fontWeight}>
      {text}
    </Text>
  );
};

export default TextViewer;
