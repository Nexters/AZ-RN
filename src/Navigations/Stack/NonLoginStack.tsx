import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NonLoginStackParams } from '@types';

import Login from '~/Screens/Login';
import logo_png from '@png/logo.png';
import { Image } from '~/Components/Atoms';
import { HomeHeaderStyle } from './stackNaviOptions';

import { HeaderWrapper } from '~/Components/Templates';
import CreateAccount from '~/Screens/CreateAccount';
import { BackNaviate } from '~/Components/Molecules';
import { WHITE } from '~/constants/Colors';

const CreateStack = createStackNavigator<NonLoginStackParams>();

const NonLoginStack = () => (
  <CreateStack.Navigator mode="card">
    <CreateStack.Screen
      name="Login"
      component={Login}
      options={{
        headerLeft: () => (
          <HeaderWrapper>
            <Image imgSrc={logo_png} width="57px" height="35px" />
          </HeaderWrapper>
        ),
        headerTitle: '',
        headerStyle: HomeHeaderStyle,
      }}
    />
    <CreateStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={({ navigation }) => {
        return {
          headerLeft: () => (
            <HeaderWrapper>
              <BackNaviate title="" navigation={navigation} />
            </HeaderWrapper>
          ),
          headerTitle: '회원가입',
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

export default NonLoginStack;
