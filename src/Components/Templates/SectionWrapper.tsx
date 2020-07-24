import React from 'react';
import styled from 'styled-components/native';
import Layout from '~/constants/Layout';

const Container = styled.View`
  flex: 1;
  margin-top: 20;
  margin-left: ${Layout.width / 20};
  margin-right: ${Layout.width / 20};
  justify-content: space-between;
`;

type SectionWrapperProps = {
  children: React.ReactElement | React.ReactElement[];
};

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return <Container>{children}</Container>;
};

export default SectionWrapper;
