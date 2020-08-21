import React from 'react';
import styled from 'styled-components/native';
import { Keyboard, TouchableWithoutFeedback, Platform } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

import { PURPLE, WHITE } from '~/constants/Colors';
import { Image, BottomLineInput, Text, RadiusButton, Colbox } from '~/Components/Atoms';
import { KeyboardAvoidingViewer, BackgroundContainer } from '~/Components/Templates';
import Layout from '~/constants/Layout';
import section_png from '@png/section.png';
import { NonLoginStackTypes } from '~/@types';
import { InputBindType } from '~/hooks/useHandleInput';

const Wrapper = styled.View`
  flex: 1;
  margin-left: ${`${Layout.width / 18}px`};
  margin-right: ${`${Layout.width / 18}px`};
  justify-content: space-between;
`;
const MiddleBox = styled.View`
  align-items: flex-end;
`;
const Touchable = styled.TouchableOpacity``;

type LoginProps = {
  handleLogin: () => void;
  handleNavigate: (to: NonLoginStackTypes) => void;
  idBinder: InputBindType;
  pwdBinder: InputBindType;
};

const LoginViewer = ({ handleLogin, handleNavigate, idBinder, pwdBinder }: LoginProps) => {
  return (
    <BackgroundContainer>
      <KeyboardAvoidingViewer>
        <TouchableWithoutFeedback onPress={Platform.OS !== 'web' ? Keyboard.dismiss : undefined}>
          <Wrapper>
            <Image imgSrc={section_png} marginTop={ifIphoneX(`${Layout.height / 12}px`, '0')} />
            <MiddleBox>
              <BottomLineInput
                inputBinder={idBinder}
                marginBottom={'30px'}
                placeholder="아이디"
                keyboardType="email-address"
              />
              <BottomLineInput
                inputBinder={pwdBinder}
                marginBottom={'15px'}
                secureTextEntry={true}
                placeholder="패스워드"
              />
              <Touchable>
                <Text text="비밀번호 찾기" marginBottom={'20px'} />
              </Touchable>
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
                onPress={handleLogin}
              />
              <RadiusButton
                text="회원가입"
                height={'49px'}
                color={WHITE}
                borderRadius={'45px'}
                fontSize={'15px'}
                fontWeight={300}
                marginBottom={'10px'}
                onPress={() => {
                  handleNavigate('CreateAccount');
                }}
              />
            </Colbox>
          </Wrapper>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingViewer>
    </BackgroundContainer>
  );
};

export default LoginViewer;
