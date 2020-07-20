import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from '@types';

import Home from 'src/Screens/Home';
import Detail from 'src/Screens/Detail';
import { Header } from 'src/Components/Atoms';

const CreateStack = createStackNavigator<RootStackParams>();

const Stack = () => (
  <CreateStack.Navigator>
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
