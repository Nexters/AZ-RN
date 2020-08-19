import React from 'react';
import styled from 'styled-components/native';

import { MarginStyleProps, PaddingStyleProps } from '@types';
import { marginStyles, paddingStyles } from '~/styles/mixin';

const Container = styled.View<StyleProps>`
  ${marginStyles};
  ${paddingStyles};
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  border: ${({ border }) => border ?? 'none'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '0'};
  align-items: ${({ align }) => align ?? 'flex-start'};
  background-color: ${({ bgColor }) => bgColor ?? 'transparent'};
`;

interface StyleProps extends MarginStyleProps, PaddingStyleProps {
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: number;
  align?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'space-around' | 'space-between' | 'center' | 'flex-start';
  bgColor?: string;
}

interface ColboxProps extends StyleProps {
  children: React.ReactNode;
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
  justifyContent,
  width,
  align,
  children,
  height,
  bgColor,
}: ColboxProps) => {
  return (
    <Container
      justifyContent={justifyContent}
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
      height={height}
      align={align}
      bgColor={bgColor}>
      {children}
    </Container>
  );
};

export default Colbox;
