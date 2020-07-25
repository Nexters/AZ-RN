import React from 'react';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import {
  BackgroundContainer,
  KeyboardAvoidingViewer,
} from '~/Components/Templates';
import Layout from '~/constants/Layout';
import { BorderInput, RadiusButton, Text, Colbox } from '~/Components/Atoms';
import { WHITE, PURPLE } from '~/constants/Colors';

const Wrapper = styled.View`
  flex: 1;
  margin-left: ${`${Layout.width / 20}px`};
  margin-right: ${`${Layout.width / 20}px`};
  justify-content: space-around;
`;

const CreateAccount = () => {
  return (
    <BackgroundContainer>
      <KeyboardAvoidingViewer>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Wrapper>
            <BorderInput placeholder="이메일" />
            <BorderInput placeholder="패스워드 8자 입력" />
            <BorderInput placeholder="패스워드 확인" />
            <BorderInput placeholder="닉네임 2~7자 이상 입력" />
            <Colbox>
              <Text
                fontSize="15px"
                fontWeight={600}
                text="선택사항"
                color={WHITE}
                marginBottom="10px"
              />
              <BorderInput
                placeholder="나만 알고있는 유머를 알려주세요~"
                multiline={true}
                height="80px"
              />
            </Colbox>
            <RadiusButton
              text="회원가입"
              height={'49px'}
              color={WHITE}
              bgColor={PURPLE}
              borderRadius={'45px'}
              fontSize={'16px'}
              fontWeight={800}
            />
          </Wrapper>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingViewer>
    </BackgroundContainer>
  );
};

export default CreateAccount;
