import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHandleInput } from '~/hooks';
import CreateAccountViewer from './CreateAccountViewer';
import { useToggle } from '~/hooks';
import { arrayConditionCheck, textValidation } from '~/lib';
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
    user: {
      duplicateCheck: { isIdUsed, isNicknameUsed },
    },
  } = useSelector((state: RootState) => state);

  const { onlyLowercaseAndNumberValidator, passwordValidator } = textValidation;

  useEffect(() => {
    //
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
    if (
      idBinder.text.length > 1 &&
      onlyLowercaseAndNumberValidator(idBinder.text)
    ) {
      dispatch(postVerifyIdThunk(config));
    }
  };
  const passwordEqualCheck = () => {
    if (pwdBinder.text !== verifyBinder.text) {
      return false;
    } else {
      if (passwordValidator(verifyBinder.text)) {
        return true;
      } else {
        //  add password validation wording
        return false;
      }
    }
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
      id: 'id',
      placeholder: '아이디',
      guideMsg: '아이디 중복',
      bind: idBinder,
      onToggle: userIdDuplicateCheck,
      isAvailable: isIdUsed,
    },
    {
      id: 'password',
      ...passwordHooks,
      placeholder: '비밀번호 입력',
      guideMsg: '',
      bind: pwdBinder,
    },
    {
      id: 'password2',
      ...passwordHooks,
      placeholder: '비밀번호 확인',
      guideMsg: '비밀번호 틀림',
      bind: verifyBinder,
    },
    {
      id: 'nickname',
      placeholder: '별명 입력',
      guideMsg: '별명 중복',
      bind: nicknameBinder,
      onToggle: nicknameDuplicateCheck,
      isAvailable: isNicknameUsed,
    },
  ];

  const [isActivationSignup, setIsActivationSignup] = useState<boolean>(false);

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

    setIsActivationSignup(isReady);
  }, [isIdUsed, isNicknameUsed, passwordHooks.isAvailable]);

  return (
    <CreateAccountViewer
      availables={availables}
      isActivationSignup={isActivationSignup}
      handleCreateAccount={handleCreateAccount}
    />
  );
};

export default CreateAccountContainer;
