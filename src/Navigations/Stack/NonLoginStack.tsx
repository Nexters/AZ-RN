import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NonLoginStackParams } from '@types';

import Login from '~/screens/Login';
import logo_png from '@png/logo.png';
import { Image } from '~/Components/Atoms';
import { screenOptions, HomeHeaderStyle } from './stackNaviOptions';

import { HeaderWrapper } from '~/Components/Templates';
import CreateAccount from '~/screens/CreateAccount';
import { BackNaviate } from '~/Components/Molcules';

const CreateStack = createStackNavigator<NonLoginStackParams>();

const NonLoginStack = () => (
  <CreateStack.Navigator mode="card">
    <CreateStack.Screen
      name="Login"
      component={Login}
      options={{
        headerLeft: () => (
          <HeaderWrapper>
            <Image imgSrc={logo_png} />
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
        };
      }}
    />
  </CreateStack.Navigator>
);

export default NonLoginStack;
