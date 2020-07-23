import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from '@types';

import Login from '~/screens/Login';
import { Image } from '~/Components/Atoms';
import logo_png from '@png/logo.png';
import { screenOptions } from './screenOptions';

const CreateStack = createStackNavigator<RootStackParams>();

const NonLoginStack = () => (
  <CreateStack.Navigator screenOptions={screenOptions} mode="card">
    <CreateStack.Screen
      name="Login"
      component={Login}
      options={({ navigation }) => {
        return {
          headerShown: false,
          headerLeft: () => <Image imgSrc={logo_png} marginLeft={29} marginTop={25} />,
          headerTitle: '',
        };
      }}
    />
  </CreateStack.Navigator>
);

export default NonLoginStack;
