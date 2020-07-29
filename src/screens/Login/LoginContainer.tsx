import React from 'react';
import { useDispatch } from 'react-redux';

import { sampleLoginAction } from '~/store/modules/user/actions';
import LoginViewer from './LoginViewer';
import { StackNavigationProp } from '@react-navigation/stack';
import { NonLoginStackParams, NonLoginStackTypes } from '~/@types';
import { stackNavigate } from '~/lib';

type LoginProps = {
  navigation: StackNavigationProp<NonLoginStackParams, 'Login'>;
};

const LoginContainer = ({ navigation }: LoginProps) => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(
      sampleLoginAction({
        isAuthenticated: true,
      }),
    );
  };
  const handleNavigate = (to: NonLoginStackTypes) => {
    stackNavigate(navigation, to);
  };

  return (
    <LoginViewer handleLogin={handleLogin} handleNavigate={handleNavigate} />
  );
};

export default LoginContainer;
