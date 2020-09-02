import React from 'react';
import { Text } from 'react-native';

import styled from 'styled-components/native';
import { WHITE, DARK_GREY } from '~/constants/Colors';
import { InputBindType } from '@hooks/useHandleInput';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: ${WHITE};
  border-radius: 25px;
`;
const MultilineTextInput = styled.TextInput<StyleProps>`
  padding: 22px;
  font-size: ${({ fontSize }) => fontSize ?? '12px'};
  color: ${({ color }) => color ?? 'black'};
  font-weight: ${({ fontWeight }) => fontWeight ?? '12px'};
  line-height: ${({ lineHeight }) => lineHeight ?? 15};
`;

interface StyleProps {
  fontSize?: string;
  color?: string;
  fontWeight?: number;
  lineHeight?: string;
}

interface TextAreaProps extends StyleProps {
  textAreaBinder: InputBindType;
}

const TextArea = ({ textAreaBinder, fontSize, color, lineHeight, fontWeight }: TextAreaProps) => {
  return (
    <Container>
      <MultilineTextInput
        underlineColorAndroid="transparent"
        placeholder="100자이내 입력부탁이용"
        numberOfLines={10}
        multiline={true}
        placeholderTextColor={DARK_GREY}
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        {...textAreaBinder}
      />
    </Container>
  );
};

export default TextArea;
