import React from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const Container = styled.SafeAreaView`
  flex: 1;
  /* margin-top: ${getStatusBarHeight()}; */
`;

type RootProps = {
  children: React.ReactChild | React.ReactChild[];
};

const SafeAreaContainer = ({ children }: RootProps) => {
  return ifIphoneX(<Container>{children}</Container>, <>{children}</>);
};

export default SafeAreaContainer;
