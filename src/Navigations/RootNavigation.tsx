import React from 'react';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import { RootState } from '~/store/modules';
import LoggedInStack from './Stack/LoggedInStack';
import NonLoginStack from './Stack/NonLoginStack';

const Container = styled.View`
  flex: 1;
`;

const RootNavigation = () => {
  const {
    auth: { isAuthenticated },
  } = useSelector((state: RootState) => state);

  return (
    <Container>
      {isAuthenticated ? <LoggedInStack /> : <NonLoginStack />}
    </Container>
  );
};

export default RootNavigation;
