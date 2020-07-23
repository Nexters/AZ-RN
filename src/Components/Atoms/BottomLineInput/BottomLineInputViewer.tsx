import React from 'react';
import styled from 'styled-components/native';
import { InputBinderTypes, MarginStyleProps } from '~/@types';
import { marginStyles } from '~/styles/mixin';
import { KeyboardType } from 'react-native';

const Input = styled.TextInput<MarginStyleProps>`
  padding-bottom: 19;
  width: 100%;
  background-color: transparent;
  border: 1px;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #ffffff;
  color: rgba(255, 255, 255, 0.6);
  font-size: 17;
  ${marginStyles}
`;

interface BottomLinteProps extends MarginStyleProps {
  inputBinder?: InputBinderTypes;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
}

const BottomLineInputViewer = ({
  inputBinder,
  marginLeft,
  marginTop,
  marginBottom,
  marginRight,
  placeholder,
  secureTextEntry,
  keyboardType,
}: BottomLinteProps) => {
  return (
    <Input
      {...inputBinder}
      placeholder={placeholder}
      placeholderTextColor="rgba(255, 255, 255, 0.6)"
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      keyboardType={keyboardType}
    />
  );
};

export default BottomLineInputViewer;
