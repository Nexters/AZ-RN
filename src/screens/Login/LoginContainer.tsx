import React from 'react';
import { useDispatch } from 'react-redux';

import LoginViewer from './LoginViewer';
import { StackNavigationProp } from '@react-navigation/stack';
import { NonLoginStackParams, NonLoginStackTypes } from '~/@types';
import { stackNavigate } from '~/lib';
import { sampleLoginAction } from '~/store/modules/auth/actions';

type LoginProps = {
  navigation: StackNavigationProp<NonLoginStackParams, 'Login'>;
};

const LoginContainer = ({ navigation }: LoginProps) => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(sampleLoginAction());
  };
  const handleNavigate = (to: NonLoginStackTypes) => {
    stackNavigate(navigation, to);
  };

  return (
    <LoginViewer handleLogin={handleLogin} handleNavigate={handleNavigate} />
  );
};

export default LoginContainer;
