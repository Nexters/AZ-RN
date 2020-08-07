import React from 'react';
import styled from 'styled-components/native';
import { LIGHT_DARK, GREY_DARK, DARK_GREY } from '~/constants/Colors';
import Layout from '~/constants/Layout';
import { Rowbox } from '../Atoms';

const Container = styled.View`
  background-color: ${DARK_GREY};
`;
const StickyHeader = styled.View`
  width: 100%;
  padding-top: 15px;
  align-items: center;
  background-color: ${GREY_DARK};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding-left: ${`${Layout.width / 18}px`};
  padding-right: ${`${Layout.width / 18}px`};
`;

type DeviceHeaderStickyProps = {
  children?: React.ReactChild | React.ReactChild[];
};

const DeviceHeaderSticky = ({ children }: DeviceHeaderStickyProps) => {
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
        {children}
      </StickyHeader>
    </Container>
  );
};

export default DeviceHeaderSticky;
