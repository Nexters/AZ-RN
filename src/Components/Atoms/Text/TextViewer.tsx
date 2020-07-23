import React from 'react';
import styled from 'styled-components/native';
import { MarginStyleProps } from '~/@types';
import { marginStyles } from '~/styles/mixin';
import { LIGHT_GREY } from '~/constants/Colors';

const Text = styled.Text<StyleProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 15)};
  color: ${({ color }) => (color ? color : `${LIGHT_GREY}`)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 'bold')};
  ${marginStyles};
`;

interface StyleProps extends MarginStyleProps {
  fontSize?: number;
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
