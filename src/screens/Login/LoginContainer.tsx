import React from 'react';
import { useDispatch } from 'react-redux';

import { sampleLoginAction } from '~/store/modules/user/actions';
import LoginViewer from './LoginViewer';

const LoginContainer = () => {
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
