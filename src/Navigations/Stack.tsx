import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from '@types';

import Home from '~/screens/Home';
import Detail from '~/screens/Detail';
import Login from '~/screens/Login';
import { Header, Image } from '~/Components/Atoms';
import logo_png from '@png/logo.png';
import { screenOptions } from './screenOptions';

const CreateStack = createStackNavigator<RootStackParams>();

const Stack = () => (
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
    <CreateStack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => {
        return {
          headerTitle: () => <Header navigation={navigation} />,
        };
      }}
    />
    <CreateStack.Screen name="Detail" component={Detail} />
  </CreateStack.Navigator>
);

export default Stack;
