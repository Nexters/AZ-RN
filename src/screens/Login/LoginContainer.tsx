import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParams } from '~/@types';
import LoginViewer from './LoginViewer';
import { useDispatch } from 'react-redux';
import { sampleLoginAction } from '~/store/modules/user/actions';

interface LoginProps {
  navigation: StackNavigationProp<RootStackParams, 'Login'>;
}

const LoginContainer = ({ navigation }: LoginProps) => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(
      sampleLoginAction({
        isAuthenticated: true,
      }),
    );
  };
  return <LoginViewer handleNavigate={handleLogin} />;
};

export default LoginContainer;
