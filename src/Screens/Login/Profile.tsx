import React from 'react';
import styled from 'styled-components/native';
import { BackgroundContainer, SafeAreaContainer } from '~/Components/Templates';
import { Text } from '~/Components/Atoms';

const Profile = () => {
  return (
    <BackgroundContainer>
      <SafeAreaContainer>
        <Text text="Profile" />
      </SafeAreaContainer>
    </BackgroundContainer>
  );
};

export default Profile;
