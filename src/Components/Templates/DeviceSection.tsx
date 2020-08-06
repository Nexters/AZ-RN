import React from 'react';
import styled from 'styled-components/native';
import { GREY_DARK } from '~/constants/Colors';
import Layout from '~/constants/Layout';

const Device = styled.View`
  background-color: ${GREY_DARK};
  padding-left: ${`${Layout.width / 18}px`};
  padding-right: ${`${Layout.width / 18}px`};
  padding-bottom: 20px;
`;
type DeviceSectionProps = {
  children: React.ReactChild | React.ReactChild[];
};
const DeviceSection = ({ children }: DeviceSectionProps) => {
  return <Device>{children}</Device>;
};

export default DeviceSection;
