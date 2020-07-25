import React from 'react';
import styled from 'styled-components/native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { PURPLE, WHITE } from '~/constants/Colors';
import {
  Image,
  BottomLineInput,
  Text,
  RadiusButton,
  Colbox,
} from '~/Components/Atoms';
import {
  KeyboardAvoidingViewer,
  BackgroundContainer,
} from '~/Components/Templates';
import Layout from '~/constants/Layout';
import section_png from '@png/section.png';

const Wrapper = styled.View`
  flex: 1;
  margin-left: ${`${Layout.width / 20}px`};
  margin-right: ${`${Layout.width / 20}px`};
  justify-content: space-between;
`;

const MiddleBox = styled.View`
  align-items: flex-end;
`;

type LoginProps = {
  handleNavigate: () => void;
};

const LoginViewer = ({ handleNavigate }: LoginProps) => {
  return (
    <BackgroundContainer>
      <KeyboardAvoidingViewer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Wrapper>
            <Image imgSrc={section_png} marginTop={`${Layout.height / 12}px`} />
            <MiddleBox>
              <BottomLineInput
                marginBottom={'30px'}
                placeholder="아이디"
                keyboardType="email-address"
              />
              <BottomLineInput
                marginBottom={'15px'}
                secureTextEntry={true}
                placeholder="패스워드"
              />
              <Text text="비밀번호 찾기" marginBottom={'20px'} />
            </MiddleBox>
            <Colbox>
              <RadiusButton
                text="로그인"
                height={'49px'}
                color={WHITE}
                bgColor={PURPLE}
                borderRadius={'45px'}
                fontSize={'16px'}
                fontWeight={800}
                onPress={handleNavigate}
              />
              <RadiusButton
                text="회원가입"
                height={'49px'}
                color={WHITE}
                borderRadius={'45px'}
                fontSize={'15px'}
                fontWeight={300}
                marginBottom={'10px'}
              />
            </Colbox>
          </Wrapper>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingViewer>
    </BackgroundContainer>
  );
};

export default LoginViewer;
