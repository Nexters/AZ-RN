import React from 'react';
import styled from 'styled-components/native';

import { MarginStyleProps, PaddingStyleProps } from '@types';
import { marginStyles, paddingStyles } from '~/styles/mixin';

const Container = styled.View<StyleProps>`
  flex-direction: row;
  ${marginStyles};
  ${paddingStyles};
  align-items: ${({ align }) => align ?? 'center'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  background-color: ${({ bgColor }) => bgColor ?? 'transparent'};
  border: ${({ border }) => border ?? 'none'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '0px'};
  flex-wrap: ${({ flexWrap }) => flexWrap ?? 'nowrap'};
`;

interface StyleProps extends MarginStyleProps, PaddingStyleProps {
  width?: string;
  height?: string;
  bgColor?: string;
  align?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'space-around' | 'space-between' | 'center' | 'flex-start' | 'flex-end';
  flexWrap?: 'wrap' | 'nowrap';
  border?: string;
  borderRadius?: string;
}

interface RowboxProps extends StyleProps {
  children?: React.ReactNode;
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
  align,
  width,
  border,
  borderRadius,
  justifyContent,
  children,
  height,
  bgColor,
  flexWrap,
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
      paddingRight={paddingRight}
      align={align}
      width={width}
      border={border}
      borderRadius={borderRadius}
      justifyContent={justifyContent}
      height={height}
      flexWrap={flexWrap}
      bgColor={bgColor}>
      {children}
    </Container>
  );
};

export default Rowbox;
