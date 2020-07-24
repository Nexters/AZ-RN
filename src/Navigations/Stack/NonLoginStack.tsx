import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from '@types';

import Login from '~/screens/Login';
import logo_png from '@png/logo.png';
import { Image } from '~/Components/Atoms';
import { screenOptions } from './screenOptions';

import SectionWrapper from '~/Components/Templates/SectionWrapper';

const CreateStack = createStackNavigator<RootStackParams>();

const NonLoginStack = () => (
  <CreateStack.Navigator screenOptions={screenOptions} mode="card">
    <CreateStack.Screen
      name="Login"
      component={Login}
      options={({ navigation }) => {
        return {
          headerLeft: () => (
            <SectionWrapper>
              <Image imgSrc={logo_png} />
            </SectionWrapper>
          ),
          headerTitle: '',
        };
      }}
    />
  </CreateStack.Navigator>
);

export default NonLoginStack;
