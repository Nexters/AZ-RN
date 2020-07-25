import React from 'react';
import styled from 'styled-components/native';
import Layout from '~/constants/Layout';

const Container = styled.View<StyleProps>`
  flex: 1;
  margin-left: ${`${Layout.width / 20}px`};
  margin-right: ${`${Layout.width / 20}px`};
  justify-content: space-between;
  ${({ marginTop }) => (marginTop ? marginTop : '0')};
  ${({ marginBottom }) => (marginBottom ? marginBottom : '0')};
`;

interface StyleProps {
  marginTop?: number;
  marginBottom?: number;
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
    <Container marginBottom={marginBottom} marginTop={marginTop}>
      {children}
    </Container>
  );
};

export default SectionWrapper;
