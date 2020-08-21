import React from 'react';
import { useDispatch } from 'react-redux';

import LoginViewer from './LoginViewer';
import { StackNavigationProp } from '@react-navigation/stack';
import { NonLoginStackParams, NonLoginStackTypes } from '~/@types';
import { stackNavigate } from '~/lib';
import { useHandleInput } from '~/hooks';

type LoginProps = {
  navigation: StackNavigationProp<NonLoginStackParams, 'Login'>;
};

const LoginContainer = ({ navigation }: LoginProps) => {
  const dispatch = useDispatch();
  const { bind: idBinder } = useHandleInput('');
  const { bind: pwdBinder } = useHandleInput('');
  const handleLogin = () => {
    //
  };
  const handleNavigate = (to: NonLoginStackTypes) => {
    stackNavigate(navigation, to);
  };

  return <LoginViewer handleLogin={handleLogin} handleNavigate={handleNavigate} />;
};

export default LoginContainer;
