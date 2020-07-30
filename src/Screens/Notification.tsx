import React from 'react';
import styled from 'styled-components/native';
import { BackgroundContainer, SafeAreaContainer } from '~/Components/Templates';
import { Text } from '~/Components/Atoms';

const Notification = () => {
  return (
    <BackgroundContainer>
      <SafeAreaContainer>
        <Text text="NOTIFICATION" />
      </SafeAreaContainer>
    </BackgroundContainer>
  );
};

export default Notification;
