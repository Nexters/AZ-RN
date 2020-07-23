import React from 'react';
import styled from 'styled-components/native';
import { DARK_GREY } from '~/constants/Colors';
import { Image, BottomLineInput, Text } from '~/Components/Atoms';
import Layout from '~/constants/Layout';
import logo_png from '@png/logo.png';
import section_png from '@png/section.png';
import { SafeAreaContainer } from '~/Components/Templates';

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
const BottomBox = styled.View`
  align-items: flex-end;
`;
const Logo = styled(Image)``;
const Section = styled(Image)``;

const Account = () => {
  return (
    <Container>
      <SafeAreaContainer>
        <Wrapper>
          <TopBox>
            <Logo imgSrc={logo_png} />
            <Section imgSrc={section_png} marginTop={85} />
          </TopBox>
          <BottomBox>
            <BottomLineInput marginBottom={30} placeholder="아이디" />
            <BottomLineInput marginBottom={15} secureTextEntry={true} placeholder="패스워드" />
            <Text text="비밀번호 찾기" marginBottom={20} />
          </BottomBox>
        </Wrapper>
      </SafeAreaContainer>
    </Container>
  );
};

export default Account;
