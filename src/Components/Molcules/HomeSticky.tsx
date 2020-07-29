import React from 'react';
import styled from 'styled-components/native';
import { LIGHT_DARK, WHITE, GREY_DARK, DARK_GREY } from '~/constants/Colors';
import Layout from '~/constants/Layout';
import { Rowbox, Text } from '../Atoms';

const Container = styled.View`
  background-color: ${DARK_GREY};
`;
const StickyHeader = styled.View`
  width: 100%;
  padding-top: 15px;
  align-items: center;
  background-color: ${GREY_DARK};
  margin-top: ${`${Layout.height / 30}px`};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding-left: ${`${Layout.width / 20}px`};
  padding-right: ${`${Layout.width / 20}px`};
  padding-bottom: 10px;
`;

const HomeSticky = () => {
  return (
    <Container>
      <StickyHeader>
        <Rowbox
          width="44px"
          height="6px"
          bgColor={LIGHT_DARK}
          borderRadius="20px"
          marginBottom="18px"
        />
        <Rowbox
          width="100%"
          justifyContent="space-between"
          bgColor="transparent">
          <Text
            text="개그 목록"
            fontSize="18px"
            fontWeight={700}
            color={WHITE}
          />
          <Rowbox
            borderRadius="25px"
            border="1px solid #ffffff"
            width="110px"
            height="44px"
            bgColor="transparent"
            justifyContent="center">
            <Text
              text="명예의 전당"
              fontSize="13px"
              fontWeight={200}
              color={WHITE}
            />
          </Rowbox>
        </Rowbox>
      </StickyHeader>
    </Container>
  );
};

export default HomeSticky;
