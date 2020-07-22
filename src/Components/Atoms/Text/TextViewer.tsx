import React from 'react';
import styled from 'styled-components/native';
import { MarginStyleProps } from '~/@types';
import { marginStyles } from '~/styles/mixin';
import { LIGHT_GREY } from '~/constants/Colors';

const Text = styled.Text<StyleProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 15)};
  color: ${({ color }) => (color ? color : `${LIGHT_GREY}`)};
  ${marginStyles};
`;

interface StyleProps extends MarginStyleProps {
  fontSize?: number;
  color?: string;
}

interface TextProps extends StyleProps {
  text: string;
}

const TextViewer = ({ text, marginLeft, marginTop, marginBottom, marginRight }: TextProps) => {
  return (
    <Text
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}>
      {text}
    </Text>
  );
};

export default TextViewer;
