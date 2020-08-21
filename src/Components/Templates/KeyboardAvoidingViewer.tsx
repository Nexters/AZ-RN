import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

const Conatiner = styled.KeyboardAvoidingView`
  flex: 1;
`;

type KeyboardAvoidingViewerProps = {
  children: React.ReactChild | React.ReactChild[];
};
const KeyboardAvoidingViewer = ({ children }: KeyboardAvoidingViewerProps) => {
  return <Conatiner behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>{children}</Conatiner>;
};

export default KeyboardAvoidingViewer;
