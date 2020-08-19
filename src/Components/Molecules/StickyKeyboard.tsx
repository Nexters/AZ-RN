import React from 'react';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import styled from 'styled-components/native';

import { WHITE } from '~/constants/Colors';
import commentPush from '@png/comment_push.png';

import { Rowbox, Image } from '../Atoms';
import Layout from '~/constants/Layout';
import { InputBindType } from '~/hooks/useHandleInput';
import { TextInput } from 'react-native';

const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  padding-left: ${`${Layout.width / 18}px`};
  padding-right: ${`${Layout.width / 18}px`};
`;
const Action = styled.View`
  position: absolute;
  right: 25px;
`;

interface StickyKeyboardProps {
  inputBinder: InputBindType;
  onPress: () => void;
  inputRef: React.MutableRefObject<TextInput | undefined>;
}

const StickyKeyboard = ({ inputRef, inputBinder, onPress }: StickyKeyboardProps) => {
  return (
    <KeyboardAccessoryView alwaysVisible={true}>
      <Rowbox height="56px" bgColor={WHITE}>
        <Input
          ref={inputRef}
          placeholder="댓글달기"
          placeholderTextColor="#999999"
          {...inputBinder}
        />
        <Action>
          <Image imgSrc={commentPush} width="28px" height="28px" onPress={onPress} />
        </Action>
      </Rowbox>
    </KeyboardAccessoryView>
  );
};

export default StickyKeyboard;
