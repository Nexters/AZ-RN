import React from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${getStatusBarHeight()};
`;

type RootProps = {
  children: React.ReactChild | React.ReactChild[];
};

const SafeAreaContainer = ({ children }: RootProps) => {
  return <Container>{children}</Container>;
};

export default SafeAreaContainer;
