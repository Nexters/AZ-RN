import React from 'react';
import styled from 'styled-components/native';
import { DARK_GREY } from '~/constants/Colors';

const Container = styled.View`
  flex: 1;
  background-color: ${DARK_GREY};
`;
const SafeAreaZone = styled.SafeAreaView`
  flex: 1;
`;
type BackgroundContainerProps = {
  children: React.ReactChild | React.ReactChild[];
};
const BackgroundContainer = ({ children }: BackgroundContainerProps) => {
  return (
    <Container>
      <SafeAreaZone>{children}</SafeAreaZone>
    </Container>
  );
};

export default BackgroundContainer;
