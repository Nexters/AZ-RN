import React from 'react';
import styled from 'styled-components/native';

import { MarginStyleProps, PaddingStyleProps } from '@types';
import { marginStyles, paddingStyles } from '~/styles/mixin';

const Container = styled.View<StyleProps>`
  ${marginStyles};
  ${paddingStyles};
  width: ${({ width }) => width ?? '100%'};
  border: ${({ border }) => border ?? 'none'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '0'};
`;

interface StyleProps extends MarginStyleProps, PaddingStyleProps {
  width?: string;
  border?: string;
  borderRadius?: number;
}

interface ColboxProps extends StyleProps {
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
  borderRadius,
  border,
  width,
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
      paddingRight={paddingRight}
      borderRadius={borderRadius}
      border={border}
      width={width}>
      {children}
    </Container>
  );
};

export default Colbox;
