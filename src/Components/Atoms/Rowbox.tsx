import React from 'react';
import styled from 'styled-components/native';

import { MarginStyleProps, PaddingStyleProps } from '@types';
import { marginStyles, paddingStyles } from '~/styles/mixin';

const Container = styled.View<StyleProps>`
  flex: 1;
  flex-direction: row;
  ${marginStyles};
  ${paddingStyles}
`;

type StyleProps = MarginStyleProps | PaddingStyleProps;

interface RowboxProps extends MarginStyleProps, PaddingStyleProps {
  children: React.ReactChild | React.ReactChild[];
}

const Rowbox = ({
  marginLeft,
  marginTop,
  marginBottom,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  children,
}: RowboxProps) => {
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

export default Rowbox;
