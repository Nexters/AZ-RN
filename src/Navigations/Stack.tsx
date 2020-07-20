import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Detail from '../Screens/Detail';
import { RootStackParams } from '@types';
import { Header } from '../Components/Atoms';

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
