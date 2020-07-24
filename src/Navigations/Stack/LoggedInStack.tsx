import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from '@types';

import Home from '~/screens/Home';
import Detail from '~/screens/Detail';
import { Image } from '~/Components/Atoms';
import { screenOptions } from './screenOptions';
import SectionWrapper from '~/Components/Templates/SectionWrapper';
import logo_png from '@png/logo.png';

const CreateStack = createStackNavigator<RootStackParams>();

const LoggedInStack = () => (
  <CreateStack.Navigator screenOptions={screenOptions} mode="card">
    <CreateStack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => {
        return {
          headerLeft: () => (
            <SectionWrapper>
              <Image imgSrc={logo_png} />
            </SectionWrapper>
          ),
        };
      }}
    />
    <CreateStack.Screen
      name="Detail"
      component={Detail}
      options={({ navigation }) => {
        return {
          headerLeft: () => (
            <SectionWrapper>
              <Image imgSrc={logo_png} />
            </SectionWrapper>
          ),
        };
      }}
    />
  </CreateStack.Navigator>
);

export default LoggedInStack;
