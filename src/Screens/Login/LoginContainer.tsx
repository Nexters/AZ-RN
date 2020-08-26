import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginViewer from './LoginViewer';
import { StackNavigationProp } from '@react-navigation/stack';
import { NonLoginStackParams, NonLoginStackTypes } from '~/@types';
import { stackNavigate } from '~/lib';
import { useHandleInput } from '~/hooks';
import { postLogin } from '~/api';
import { postLoginThunk } from '~/store/modules/auth/thunks';
import { RootState } from '~/store/modules';
import { Alert } from 'react-native';
import { reset } from '~/store/modules/auth/actions';

type LoginProps = {
  navigation: StackNavigationProp<NonLoginStackParams, 'Login'>;
};

const LoginContainer = ({ navigation }: LoginProps) => {
  const dispatch = useDispatch();
  const {
    auth: { status },
  } = useSelector((state: RootState) => state);

  const { bind: idBinder } = useHandleInput('');
  const { bind: pwdBinder } = useHandleInput('');

  const handleLogin = () => {
    const config = {
      ...postLogin,
      identification: idBinder.text,
      password: pwdBinder.text,
    };

    dispatch(postLoginThunk(config));
  };

  const handleNavigate = (to: NonLoginStackTypes) => {
    stackNavigate(navigation, to);
  };

  useEffect(() => {
    if (status === 401) {
      Alert.alert(
        '로그인 실패',
        '로그인 정보가 맞지 않습니다.',
        [{ text: '확인', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
      dispatch(reset());
    }
  }, [status]);

  return (
    <LoginViewer
      handleLogin={handleLogin}
      handleNavigate={handleNavigate}
      idBinder={idBinder}
      pwdBinder={pwdBinder}
    />
  );
};

export default LoginContainer;
