import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useHandleInput } from '~/hooks';
import CreateAccountViewer from './CreateAccountViewer';
import { postIdentificationCheck, postNicknameCheck, postCreateAccount } from '~/api';
import { RootState } from '~/store/modules';
import { postVerifyIdThunk, postVerifyNicknameThunk } from '~/store/modules/user/thunks';
import { textValidation, arrayConditionCheck } from '~/lib';
import { postCreataeAccountThunk } from '~/store/modules/auth/thunks';

const CreateAccountContainer = () => {
  const dispatch = useDispatch();
  const {
    auth,
    loading,
    user: {
      duplicateCheck: { isIdUsed, isNicknameUsed },
    },
  } = useSelector((state: RootState) => state);

  const {
    onlyLowercaseAndNumberValidator,
    passwordValidator,
    exceptSpecialCaractor,
  } = textValidation;

  const { bind: idBinder } = useHandleInput('');
  const { bind: pwdBinder } = useHandleInput('');
  const { bind: verifyBinder } = useHandleInput('');
  const { bind: nicknameBinder } = useHandleInput('');

  type ErrorType = {
    available?: boolean;
    errorMsg: string;
  };
  const [idErrorMsg, setIdErrorMsg] = useState<ErrorType>({
    available: undefined,
    errorMsg: '',
  });
  const [pwdErrorMsg, setPwdErrorMsg] = useState<ErrorType>({
    available: undefined,
    errorMsg: '',
  });
  const [nicknameErrorMsg, setNicknameErrorMsg] = useState<ErrorType>({
    available: undefined,
    errorMsg: '',
  });
  const [isActivation, setIsActivation] = useState(false);

  const handleIdVerify = () => {
    const { text } = idBinder;
    if (text.length === 0) return;
    if (text.length > 2 && onlyLowercaseAndNumberValidator(text)) {
      const config = {
        ...postIdentificationCheck,
        identification: text,
      };
      dispatch(postVerifyIdThunk(config));
      setIdErrorMsg({
        available: false,
        errorMsg: '',
      });
    } else {
      setIdErrorMsg({
        available: true,
        errorMsg: '2개 이상 영어 및 숫자로 만들라구~',
      });
    }
  };

  const handlePwdVerify = () => {
    const { text: password1 } = pwdBinder;
    const { text: password2 } = verifyBinder;
    if (password2.length === 0 && password1.length === 0) return;
    if (password1 !== password2) {
      setPwdErrorMsg({
        available: true,
        errorMsg: '비밀번호가 다릅니다',
      });
    } else {
      if (passwordValidator(password2)) {
        setPwdErrorMsg({
          available: false,
          errorMsg: '',
        });
      } else {
        setPwdErrorMsg({
          available: true,
          errorMsg: '8자 이상 영문 숫자 조합으로 부탁혀~',
        });
      }
    }
  };

  const handleNicknameVerify = () => {
    const { text } = nicknameBinder;
    if (text.length > 1 && exceptSpecialCaractor(text)) {
      const config = {
        ...postNicknameCheck,
        nickname: text,
      };
      dispatch(postVerifyNicknameThunk(config));
      setNicknameErrorMsg({
        available: false,
        errorMsg: '',
      });
    } else {
      setNicknameErrorMsg({
        available: true,
        errorMsg: '2자 이상 그리고 특수문자 제외 해!',
      });
    }
  };

  useEffect(() => {
    console.log('isNicknameUsed', isNicknameUsed);

    if (isIdUsed) {
      setIdErrorMsg({
        available: true,
        errorMsg: '아이디 중복이라구',
      });
    }
    if (isNicknameUsed) {
      setNicknameErrorMsg({
        available: true,
        errorMsg: '닉네임 중복입니다만..',
      });
    }
  }, [isIdUsed, isNicknameUsed]);

  useEffect(() => {
    const conditions = [idErrorMsg.available, pwdErrorMsg.available, nicknameErrorMsg.available];
    const reuslt = arrayConditionCheck(
      conditions,
      (condition) => condition !== undefined && !condition,
    );
    setIsActivation(reuslt);
  }, [idErrorMsg, pwdErrorMsg, nicknameErrorMsg]);

  const inputOptions = [
    {
      id: 'id',
      placeholder: '아이디',
      bind: idBinder,
      onBlur: handleIdVerify,
      errorOption: idErrorMsg,
    },
    {
      id: 'password',
      placeholder: '비밀번호 입력',
      bind: pwdBinder,
      errorOption: pwdErrorMsg,
      secureTextEntry: true,
    },
    {
      id: 'password2',
      placeholder: '비밀번호 확인',
      bind: verifyBinder,
      onBlur: handlePwdVerify,
      errorOption: pwdErrorMsg,
      secureTextEntry: true,
    },
    {
      id: 'nickname',
      placeholder: '별명 입력',
      bind: nicknameBinder,
      onBlur: handleNicknameVerify,
      errorOption: nicknameErrorMsg,
    },
  ];

  const handleCreateAccount = () => {
    const config = {
      ...postCreateAccount,
      identification: idBinder.text,
      nickname: nicknameBinder.text,
      password: pwdBinder.text,
    };
    dispatch(postCreataeAccountThunk(config));
  };

  return (
    <CreateAccountViewer
      inputOptions={inputOptions}
      handleCreateAccount={handleCreateAccount}
      isActivation={isActivation}
    />
  );
};

export default CreateAccountContainer;
