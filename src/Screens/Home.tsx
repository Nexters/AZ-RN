import React from 'react';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '@types';
import BackgroundContainer from '~/Components/Templates/BackgroundContainer';

const Text = styled.Text``;
const Button = styled.TouchableOpacity``;

interface HomeProps {
  navigation: StackNavigationProp<RootStackParams, 'Home'>;
}

const Home = ({ navigation }: HomeProps) => {
  return (
    <BackgroundContainer>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate('Detail')}>
        <Text>Press Here</Text>
      </Button>
    </BackgroundContainer>
  );
};

export default Home;
