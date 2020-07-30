import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginStackParams } from '@types';

import Home from '~/screens/Home';
import Detail from '~/screens/Detail';
import { Image } from '~/Components/Atoms';
import { headerStyle } from './stackNaviOptions';
import logo_png from '@png/logo.png';
import bell_png from '@png/bell_notification.png';
import level_one_profile_png from '@png/level_one_profile.png';
import { HeaderWrapper } from '~/Components/Templates';
import Notification from '~/screens/Notification';
import { BackNaviate } from '~/Components/Molcules';
import Profile from '~/screens/Login/Profile';

const CreateStack = createStackNavigator<LoginStackParams>();

const LoggedInStack = () => (
  <CreateStack.Navigator mode="card">
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
              <Image
                onPress={() => {
                  navigation.navigate('Notification');
                }}
                imgSrc={bell_png}
                marginRight={'7px'}
              />
              <Image
                onPress={() => {
                  navigation.navigate('Profile');
                }}
                imgSrc={level_one_profile_png}
              />
            </HeaderWrapper>
          ),
          headerTitle: '',
          headerStyle,
        };
      }}
    />
    <CreateStack.Screen name="Detail" component={Detail} />
    <CreateStack.Screen
      name="Notification"
      component={Notification}
      options={({ navigation }) => {
        return {
          headerLeft: () => (
            <HeaderWrapper>
              <BackNaviate title="알림" navigation={navigation} />
            </HeaderWrapper>
          ),
          headerTitle: '',
          headerStyle,
        };
      }}
    />
    <CreateStack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => {
        return {
          headerLeft: () => (
            <HeaderWrapper>
              <BackNaviate title="마이페이지" navigation={navigation} />
            </HeaderWrapper>
          ),
          headerTitle: '',
          headerStyle,
        };
      }}
    />
  </CreateStack.Navigator>
);

export default LoggedInStack;
