import React from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import { BackgroundContainer } from '~/Components/Templates';
import Layout from '~/constants/Layout';
import { RadiusButton } from '~/Components/Atoms';
import { WHITE, PURPLE } from '~/constants/Colors';
import { ValidationInput } from '~/Components/Molcules';
import { InputBindType } from '~/hooks/useHandleInput';
import { getUniqueKey, arrayConditionCheck } from '~/lib';

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
  bind: InputBindType;
  availables: Array<{
    isAvailable: boolean;
    onToggle: () => void;
    placeholder: string;
    guideMsg: string;
  }>;
  isActivationSignup: boolean;
};

const CreateAccountViewer = ({
  bind,
  availables,
  isActivationSignup,
}: CreateAccountProps) => {
  return (
    <BackgroundContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <AvoidWrapper>
          <TopWrapper>
            {availables.map(
              ({ isAvailable, onToggle, placeholder, guideMsg }, index) => (
                <ValidationInput
                  inputBinder={bind}
                  placeholder={placeholder}
                  onBlur={onToggle}
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
