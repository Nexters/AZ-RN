import React from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

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

type CreateAccountProps = {
  availables: Array<{
    id: string;
    isAvailable: boolean | undefined;
    onToggle: () => void;
    placeholder: string;
    guideMsg: string;
    bind: InputBindType;
  }>;
  isActivationSignup: boolean;
  handleCreateAccount: () => void;
};

const CreateAccountViewer = ({
  availables,
  isActivationSignup,
  handleCreateAccount,
}: CreateAccountProps) => {
  return (
    <BackgroundContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <AvoidWrapper>
          <TopWrapper>
            {availables.map(
              (
                { isAvailable, onToggle, placeholder, guideMsg, bind, id },
                index,
              ) => (
                <ValidationInput
                  inputBinder={bind}
                  placeholder={placeholder}
                  onBlur={id !== 'password' ? onToggle : undefined}
                  isAvailable={isAvailable}
                  guideMsg={guideMsg}
                  key={getUniqueKey(index)}
                />
              ),
            )}
          </TopWrapper>
          <BottomWrapper>
            {isActivationSignup ? (
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
