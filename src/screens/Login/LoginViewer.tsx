import React from 'react';
import styled from 'styled-components/native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { DARK_GREY, PURPLE, WHITE } from '~/constants/Colors';
import { Image, BottomLineInput, Text } from '~/Components/Atoms';
import Layout from '~/constants/Layout';
import section_png from '@png/section.png';
import KeyboardAvoidingViewer from '~/Components/Templates/KeyboardAvoidingViewer';
import RadiusButton from '~/Components/Atoms/RadiusButton';
import BackgroundContainer from '~/Components/Templates/BackgroundContainer';

const Wrapper = styled.View`
  flex: 1;
  margin-left: ${Layout.width / 20};
  margin-right: ${Layout.width / 20};
  justify-content: space-between;
`;

const MiddleBox = styled.View`
  align-items: flex-end;
`;
const BottomBox = styled.View``;

type LoginProps = {
  handleNavigate: () => void;
};

const LoginViewer = ({ handleNavigate }: LoginProps) => {
  return (
    <BackgroundContainer>
      <KeyboardAvoidingViewer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Wrapper>
            <Image imgSrc={section_png} marginTop={Layout.height / 12} />
            <MiddleBox>
              <BottomLineInput
                marginBottom={30}
                placeholder="아이디"
                keyboardType="email-address"
              />
              <BottomLineInput
                marginBottom={15}
                secureTextEntry={true}
                placeholder="패스워드"
              />
              <Text text="비밀번호 찾기" marginBottom={20} />
            </MiddleBox>
            <BottomBox>
              <RadiusButton
                text="로그인"
                height={49}
                color={WHITE}
                bgColor={PURPLE}
                borderRadius={45}
                fontSize={16}
                fontWeight={800}
                onPress={handleNavigate}
              />
              <RadiusButton
                text="회원가입"
                height={49}
                color={WHITE}
                borderRadius={45}
                fontSize={15}
                fontWeight={300}
                marginBottom={10}
              />
            </BottomBox>
          </Wrapper>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingViewer>
    </BackgroundContainer>
  );
};

export default LoginViewer;
