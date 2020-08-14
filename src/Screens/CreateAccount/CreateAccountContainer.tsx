import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHandleInput } from '~/hooks';
import CreateAccountViewer from './CreateAccountViewer';
import { useToggle } from '~/hooks';
import { arrayConditionCheck } from '~/lib';
import { postCreataeAccountThunk } from '~/store/modules/auth/thunks';
import {
  postCreateAccount,
  postIdentificationCheck,
  postNicknameCheck,
} from '~/api';
import { RootState } from '~/store/modules';
import {
  postVerifyIdThunk,
  postVerifyNicknameThunk,
} from '~/store/modules/user/thunks';

const CreateAccountContainer = () => {
  const dispatch = useDispatch();
  const {
    auth,
    loading,
    user: { duplicateCheck },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    console.log('duplicateCheck', duplicateCheck);
  }, [auth]);

  const { bind: idBinder } = useHandleInput('');
  const { bind: pwdBinder } = useHandleInput('');
  const { bind: verifyBinder } = useHandleInput('');
  const { bind: nicknameBinder } = useHandleInput('');

  const userIdDuplicateCheck = () => {
    const config = {
      ...postIdentificationCheck,
      identification: idBinder.text,
    };
    dispatch(postVerifyIdThunk(config));
  };
  const passwordEqualCheck = () => {
    return pwdBinder.text !== verifyBinder.text ? true : false;
  };
  const nicknameDuplicateCheck = () => {
    const config = {
      ...postNicknameCheck,
      identification: nicknameBinder.text,
    };
    dispatch(postVerifyNicknameThunk(config));
  };

  const passwordHooks = useToggle(undefined, passwordEqualCheck);

  const availables = [
    {
      placeholder: '아이디',
      guideMsg: '아이디 중복',
      bind: idBinder,
      onToggle: userIdDuplicateCheck,
      isAvailable: duplicateCheck.isIdUsed,
    },
    {
      ...passwordHooks,
      placeholder: '비밀번호 입력',
      guideMsg: '',
      bind: pwdBinder,
    },
    {
      ...passwordHooks,
      placeholder: '비밀번호 확인',
      guideMsg: '비밀번호 틀림',
      bind: verifyBinder,
    },
    {
      placeholder: '별명 입력',
      guideMsg: '별명 중복',
      bind: nicknameBinder,
      onToggle: nicknameDuplicateCheck,
      isAvailable: duplicateCheck.isNicknameUsed,
    },
  ];

  const [isActivationSignup, setActivationSignup] = useState<boolean>(false);

  const handleCreateAccount = () => {
    const config = {
      ...postCreateAccount,
      identification: idBinder.text,
      nickname: nicknameBinder.text,
      password: pwdBinder.text,
    };

    dispatch(postCreataeAccountThunk(config));
  };

  useEffect(() => {
    const isReady = arrayConditionCheck(
      availables,
      (available) => available.isAvailable === true,
    );
    // API 요청했는지 확인 하는 조건 추가 해야함.
    setActivationSignup(isReady);
  }, [...availables]);

  return (
    <CreateAccountViewer
      availables={availables}
      isActivationSignup={isActivationSignup}
      handleCreateAccount={handleCreateAccount}
    />
  );
};

export default CreateAccountContainer;
