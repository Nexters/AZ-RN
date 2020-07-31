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
  align-items: ${({ align }) => align ?? 'flex-start'};
`;

interface StyleProps extends MarginStyleProps, PaddingStyleProps {
  width?: string;
  border?: string;
  borderRadius?: number;
  align?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'space-around' | 'space-between' | 'center' | 'flex-start';
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
  align,
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
      width={width}
      align={align}>
      {children}
    </Container>
  );
};

export default Colbox;
