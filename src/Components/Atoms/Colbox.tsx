import React from 'react';
import styled from 'styled-components/native';

import { MarginStyleProps, PaddingStyleProps } from '@types';
import { marginStyles, paddingStyles } from '~/styles/mixin';

const Container = styled.View<StyleProps>`
  flex-direction: row;
  ${marginStyles};
  ${paddingStyles}
`;

type StyleProps = MarginStyleProps | PaddingStyleProps;

interface ColboxProps extends MarginStyleProps, PaddingStyleProps {
  children: React.ReactChild | React.ReactChild[];
}

const Colbox = ({
  marginLeft,
  marginTop,
  marginBottom,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  children,
}: ColboxProps) => {
  return (
    <Container
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}>
      {children}
    </Container>
  );
};

export default Colbox;
