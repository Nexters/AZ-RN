import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;

const Detail = () => {
  const [position, setPosition] = useState(
    new Animated.ValueXY({ x: 0, y: 0 }),
  );
  const moveX = () => {
    Animated.timing(position, {
      toValue: { x: 100, y: 0 },
      useNativeDriver: true,
      delay: 200,
    }).start();
  };

  useEffect(() => {
    moveX();
  }, []);
  return (
    <Container>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          transform: [{ translateX: position.x }],
        }}></Animated.View>
    </Container>
  );
};

export default Detail;
