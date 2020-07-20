import React from 'react';
import styled from 'styled-components/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '@types';

const Container = styled.View``;
const Text = styled.Text``;
const Button = styled.TouchableOpacity``;

interface HomeProps {
  navigation: StackNavigationProp<RootStackParams, 'Home'>;
}

const Home = ({ navigation }: HomeProps) => {
  return (
    <Container>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate('Detail')}>
        <Text>Press Here</Text>
      </Button>
    </Container>
  );
};

export default Home;
