import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginStackParams } from '@types';

import Home from '~/Screens/Home';
import Detail from '~/Screens/Detail';
import { Image } from '~/Components/Atoms';
import { BackNaviate } from '~/Components/Molcules';
import logo_png from '@png/logo.png';
import bell_png from '@png/bell_notification.png';
import level_one_profile_png from '@png/level_one_profile.png';
import { HomeHeaderStyle, NotiHeaderStyle } from './stackNaviOptions';
import { HeaderWrapper } from '~/Components/Templates';
import Notification from '~/Screens/Notification';
import Profile from '~/Screens/Profile';
import { WHITE } from '~/constants/Colors';
import PostWrite from '~/Screens/PostWrite';

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
                marginRight="7px"
                width="25px"
                height="26px"
              />
              <Image
                onPress={() => {
                  navigation.navigate('Profile');
                }}
                imgSrc={level_one_profile_png}
                width="34px"
                height="32px"
              />
            </HeaderWrapper>
          ),
          headerTitle: '',
          headerStyle: HomeHeaderStyle,
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
              <BackNaviate title="" navigation={navigation} />
            </HeaderWrapper>
          ),
          headerTitle: '알림',
          headerStyle: NotiHeaderStyle,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 16,
            color: WHITE,
          },
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
              <BackNaviate title="" navigation={navigation} />
            </HeaderWrapper>
          ),
          headerTitle: '마이페이지',
          headerStyle: HomeHeaderStyle,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 16,
            color: WHITE,
          },
        };
      }}
    />
    <CreateStack.Screen
      name="PostWrite"
      component={PostWrite}
      options={({ navigation }) => {
        return {
          headerLeft: () => (
            <HeaderWrapper>
              <BackNaviate title="" navigation={navigation} />
            </HeaderWrapper>
          ),
          headerTitle: '게시글 작성',
          headerStyle: HomeHeaderStyle,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 16,
            color: WHITE,
          },
        };
      }}
    />
  </CreateStack.Navigator>
);

export default LoggedInStack;
