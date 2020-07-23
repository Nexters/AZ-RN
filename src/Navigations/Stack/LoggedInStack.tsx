import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from '@types';

import Home from '~/screens/Home';
import Detail from '~/screens/Detail';
import { Header } from '~/Components/Atoms';
import { screenOptions } from './screenOptions';

const CreateStack = createStackNavigator<RootStackParams>();

const LoggedInStack = () => (
  <CreateStack.Navigator screenOptions={screenOptions} mode="card">
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

export default LoggedInStack;
