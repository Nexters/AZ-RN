import React from 'react';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '@types';

const Header = styled.View``;
const Text = styled.Text``;

type HeaderProps = {
  navigation: StackNavigationProp<RootStackParams, 'Home'>;
};

const HeaderViewr = ({ navigation }: HeaderProps) => {
  console.log(navigation);

  return (
    <Header>
      <Text>Header</Text>
    </Header>
  );
};

export default HeaderViewr;
