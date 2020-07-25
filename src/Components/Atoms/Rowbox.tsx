import React from 'react';
import styled from 'styled-components/native';

import { MarginStyleProps, PaddingStyleProps } from '@types';
import { marginStyles, paddingStyles } from '~/styles/mixin';

const Container = styled.View<StyleProps>`
  flex-direction: row;
  ${marginStyles};
  ${paddingStyles};
  align-items: ${({ align }) => (align ? align : 'center')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'flex-start'};
  width: ${({ width }) => (width ? width : '100%')};
  border: ${({ border }) => (border ? border : 'none')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '0')};
`;

interface StyleProps extends MarginStyleProps, PaddingStyleProps {
  width?: string;
  align?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'space-around' | 'space-between' | 'center';
  border?: string;
  borderRadius?: number;
}

interface RowboxProps extends StyleProps {
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
  align,
  width,
  border,
  borderRadius,
  justifyContent,
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
      paddingRight={paddingRight}
      align={align}
      width={width}
      border={border}
      borderRadius={borderRadius}
      justifyContent={justifyContent}>
      {children}
    </Container>
  );
};

export default Rowbox;
