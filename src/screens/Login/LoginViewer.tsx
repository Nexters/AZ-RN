import React from 'react';
import styled from 'styled-components/native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { DARK_GREY, PURPLE, WHITE } from '~/constants/Colors';
import { Image, BottomLineInput, Text } from '~/Components/Atoms';
import Layout from '~/constants/Layout';
import logo_png from '@png/logo.png';
import section_png from '@png/section.png';
import { SafeAreaContainer } from '~/Components/Templates';
import KeyboardAvoidingViewer from '~/Components/Templates/KeyboardAvoidingViewer';
import RadiusButton from '~/Components/Atoms/RadiusButton';

const Container = styled.View`
  flex: 1;
  background-color: ${DARK_GREY};
`;
const Wrapper = styled.View`
  flex: 1;
  margin-top: 20;
  margin-left: ${Layout.width / 20};
  margin-right: ${Layout.width / 20};
  justify-content: space-between;
`;
const TopBox = styled.View``;
const MiddleBox = styled.View`
  align-items: flex-end;
`;
const BottomBox = styled.View``;
const Logo = styled(Image)``;
const Section = styled(Image)``;

type LoginProps = {
  handleNavigate: () => void;
};

const LoginViewer = ({ handleNavigate }: LoginProps) => {
  return (
    <Container>
      <SafeAreaContainer>
        <KeyboardAvoidingViewer>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Wrapper>
              <TopBox>
                <Logo imgSrc={logo_png} />
                <Section imgSrc={section_png} marginTop={34} />
              </TopBox>
              <MiddleBox>
                <BottomLineInput
                  marginBottom={30}
                  placeholder="아이디"
                  keyboardType="email-address"
                />
                <BottomLineInput marginBottom={15} secureTextEntry={true} placeholder="패스워드" />
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
      </SafeAreaContainer>
    </Container>
  );
};

export default LoginViewer;
