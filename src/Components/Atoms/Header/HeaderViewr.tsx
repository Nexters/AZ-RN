import React from 'react';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { LoginStackParams } from '~/@types';
const Container = styled.View``;
const Text = styled.Text``;

type HeaderProps = {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
};

const HeaderViewr = ({ navigation }: HeaderProps) => {
  return (
    <Container>
      <Text>Header</Text>
    </Container>
  );
};

export default HeaderViewr;
