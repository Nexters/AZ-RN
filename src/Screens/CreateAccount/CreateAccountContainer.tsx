import React, { useState, useEffect } from 'react';
import useHandleInput from '~/hooks/useHandleInput';

import CreateAccountViewer from './CreateAccountViewer';
import { useToggle } from '~/hooks';
import { arrayConditionCheck } from '~/lib';

const CreateAccountContainer = () => {
  const { bind } = useHandleInput('');
  const userIdDuplicateCheck = () => {
    return false;
  };
  const passwordEqualCheck = () => {
    return false;
  };
  const usernameDuplicateCheck = () => {
    return false;
  };

  const passwordHooks = useToggle(true, passwordEqualCheck);

  const availables = [
    {
      ...useToggle(true, userIdDuplicateCheck),
      placeholder: '아이디',
      guideMsg: '아이디 중복',
    },
    {
      ...passwordHooks,
      placeholder: '비밀번호 입력',
      guideMsg: '',
    },
    {
      ...passwordHooks,
      placeholder: '비밀번호 확인',
      guideMsg: '비밀번호 틀림',
    },
    {
      ...useToggle(true, usernameDuplicateCheck),
      placeholder: '별명 입력',
      guideMsg: '별명 중복',
    },
  ];

  const [isActivationSignup, setActivationSignup] = useState<boolean>(false);

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
      bind={bind}
      availables={availables}
      isActivationSignup={isActivationSignup}
    />
  );
};

export default CreateAccountContainer;
