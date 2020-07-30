import React from 'react';
import styled from 'styled-components/native';
import { InputBinderTypes, MarginStyleProps } from '~/@types';
import { marginStyles } from '~/styles/mixin';
import { KeyboardType } from 'react-native';
import { WHITE } from '~/constants/Colors';

const Input = styled.TextInput<BorderInputProps>`
  width: 100%;
  height: ${({ height }) => height ?? 'auto'};
  padding: 20px 25px 20px 25px;
  color: ${WHITE};
  background-color: transparent;
  font-size: 17px;
  border: 1px solid ${WHITE};
  border-radius: 15px;
  ${marginStyles};
`;

interface BorderInputProps extends MarginStyleProps {
  inputBinder?: InputBinderTypes;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
  multiline?: boolean;
  numberOfLines?: number;
  height?: string;
}

const BorderInput = ({
  inputBinder,
  marginLeft,
  marginTop,
  marginBottom,
  marginRight,
  placeholder,
  secureTextEntry,
  keyboardType,
  multiline,
  height,
}: BorderInputProps) => {
  return (
    <Input
      {...inputBinder}
      placeholder={placeholder}
      placeholderTextColor="#999999"
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      keyboardType={keyboardType}
      multiline={multiline}
      numberOfLines={3}
      height={height}
    />
  );
};

export default BorderInput;
