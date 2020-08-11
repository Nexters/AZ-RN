import React from 'react';
import styled from 'styled-components/native';
import { DARK_GREY } from '~/constants/Colors';

const Container = styled.View`
  flex: 1;
  background-color: ${DARK_GREY};
`;

type NoSafeAreaProps = {
  children: React.ReactChild | React.ReactChild[];
};
const NoSafeArea = ({ children }: NoSafeAreaProps) => {
  return <Container>{children}</Container>;
};

export default NoSafeArea;
