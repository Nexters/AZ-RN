import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from '@types';

import Login from '~/screens/Login';
import logo_png from '@png/logo.png';
import { Image } from '~/Components/Atoms';
import { screenOptions, headerStyle } from './stackNaviOptions';

import { HeaderWrapper } from '~/Components/Templates';

const CreateStack = createStackNavigator<RootStackParams>();

const NonLoginStack = () => (
  <CreateStack.Navigator screenOptions={screenOptions} mode="card">
    <CreateStack.Screen
      name="Login"
      component={Login}
      options={({ navigation }) => {
        return {
          headerLeft: () => (
            <HeaderWrapper>
              <Image imgSrc={logo_png} />
            </HeaderWrapper>
          ),
          headerTitle: '',
          headerStyle,
        };
      }}
    />
  </CreateStack.Navigator>
);

export default NonLoginStack;
