import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from '@types';

import Home from '~/screens/Home';
import Detail from '~/screens/Detail';
import { Image } from '~/Components/Atoms';
import { screenOptions, headerStyle } from './stackNaviOptions';
import logo_png from '@png/logo.png';
import bell_png from '@png/bell_notification.png';
import level_one_profile_png from '@png/level_one_profile.png';
import { HeaderWrapper } from '~/Components/Templates';

const CreateStack = createStackNavigator<RootStackParams>();

const LoggedInStack = () => (
  <CreateStack.Navigator screenOptions={screenOptions} mode="card">
    <CreateStack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => {
        return {
          headerLeft: () => (
            <HeaderWrapper>
              <Image imgSrc={logo_png} />
            </HeaderWrapper>
          ),
          headerRight: () => (
            <HeaderWrapper>
              <Image imgSrc={bell_png} marginRight={7} />
              <Image imgSrc={level_one_profile_png} />
            </HeaderWrapper>
          ),
          headerTitle: '',
          headerStyle,
        };
      }}
    />
    <CreateStack.Screen name="Detail" component={Detail} />
  </CreateStack.Navigator>
);

export default LoggedInStack;
