import React from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';

import { BackgroundContainer } from '~/Components/Templates';
import Layout from '~/constants/Layout';
import { RadiusButton } from '~/Components/Atoms';
import { WHITE, PURPLE } from '~/constants/Colors';
import { ValidationInput } from '~/Components/Molecules';
import { InputBindType } from '~/hooks/useHandleInput';
import { getUniqueKey } from '~/lib';
const AvoidWrapper = styled.View`
  flex: 1;
  padding-left: ${`${Layout.width / 18}px`};
  padding-right: ${`${Layout.width / 18}px`};
`;
const TopWrapper = styled.View`
  justify-content: space-around;
`;
const BottomWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

type ErrorType = {
  available?: boolean;
  errorMsg: string;
};

type CreateAccountProps = {
  inputOptions: Array<{
    id: string;
    placeholder: string;
    bind: InputBindType;
    onBlur?: () => void;
    errorOption: ErrorType;
    secureTextEntry?: boolean;
  }>;
  handleCreateAccount: () => void;
  isActivation: boolean;
};

const CreateAccountViewer = ({
  inputOptions,
  handleCreateAccount,
  isActivation,
}: CreateAccountProps) => {
  return (
    <BackgroundContainer>
      <TouchableWithoutFeedback onPress={Platform.OS !== 'web' ? Keyboard.dismiss : undefined}>
        <AvoidWrapper>
          <TopWrapper>
            {inputOptions.map(
              ({ errorOption, onBlur, placeholder, bind, id, secureTextEntry }, index) => (
                <ValidationInput
                  inputBinder={bind}
                  placeholder={placeholder}
                  onBlur={id !== 'password' ? onBlur : undefined}
                  isAvailable={errorOption?.available}
                  guideMsg={id !== 'password' ? errorOption?.errorMsg : ''}
                  secureTextEntry={secureTextEntry}
                  key={getUniqueKey(index)}
                />
              ),
            )}
          </TopWrapper>
          <BottomWrapper>
            {isActivation ? (
              <RadiusButton
                text="회원가입"
                height={'49px'}
                color={WHITE}
                bgColor={PURPLE}
                borderRadius={'45px'}
                fontSize={'16px'}
                fontWeight={800}
                onPress={handleCreateAccount}
              />
            ) : (
              <RadiusButton
                text="회원가입"
                height={'49px'}
                color={WHITE}
                bgColor={'#999999'}
                borderRadius={'45px'}
                fontSize={'16px'}
                fontWeight={800}
              />
            )}
          </BottomWrapper>
        </AvoidWrapper>
      </TouchableWithoutFeedback>
    </BackgroundContainer>
  );
};

export default CreateAccountViewer;
