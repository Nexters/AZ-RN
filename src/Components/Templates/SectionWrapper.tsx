import React from 'react';
import styled from 'styled-components/native';
import Layout from '~/constants/Layout';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const Container = styled.View<StyleProps>`
  flex: 1;
  padding-left: ${`${Layout.width / 18}px`};
  padding-right: ${`${Layout.width / 18}px`};
  justify-content: space-between;
  margin-top: ${({ marginTop }) => marginTop ?? '0'};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0'};
`;

interface StyleProps {
  marginTop?: string;
  marginBottom?: string;
}

interface SectionWrapperProps extends StyleProps {
  children: React.ReactElement | React.ReactElement[];
}

const SectionWrapper = ({
  children,
  marginBottom,
  marginTop,
}: SectionWrapperProps) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container marginBottom={marginBottom} marginTop={marginTop}>
        {children}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SectionWrapper;
