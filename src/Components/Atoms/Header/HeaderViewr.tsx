import React from 'react';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '@types';

const Header = styled.View``;
const Text = styled.Text``;

const HeaderViewr = (props: any) => {
  return (
    <Header>
      <Text>Header</Text>
    </Header>
  );
};

export default HeaderViewr;
