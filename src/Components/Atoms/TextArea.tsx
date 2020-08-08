import React from 'react';
import styled from 'styled-components/native';
import { WHITE, DARK_GREY } from '~/constants/Colors';
import Rowbox from './Rowbox';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: ${WHITE};
  border-radius: 25px;
`;
const MultilineInput = styled.TextInput``;

const TextArea = () => {
  return (
    <Container>
      <MultilineInput
        underlineColorAndroid="transparent"
        placeholder="Type something"
        numberOfLines={10}
        multiline={true}
        textAlignVertical="center"
        placeholderTextColor={DARK_GREY}
      />
    </Container>
  );
};

export default TextArea;
