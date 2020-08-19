import React from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { DARK_GREY } from '~/constants/Colors';

const Container = styled.SafeAreaView`
  flex: 1;
  /* margin-top: ${getStatusBarHeight()}; */
  background-color: ${DARK_GREY};
`;

type RootProps = {
  children: React.ReactChild | React.ReactChild[];
};

const SafeAreaContainer = ({ children }: RootProps) => {
  return ifIphoneX(<Container>{children}</Container>, <>{children}</>);
};

export default SafeAreaContainer;
