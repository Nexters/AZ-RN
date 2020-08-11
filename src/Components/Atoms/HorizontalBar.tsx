import React from 'react';
import styled from 'styled-components/native';
import { MarginStyleProps } from '~/@types';
import { marginStyles } from '~/styles/mixin';
import { GREY } from '~/constants/Colors';

const Hr = styled.View<StyleProps>`
  width: 100%;
  ${marginStyles};
  background-color: ${({ color }) => color ?? `${GREY}`};
  height: ${({ height }) => height ?? '1px'};
  border: none;
`;

interface StyleProps extends MarginStyleProps {
  color?: string;
  height?: string;
}

const HorizontalBar = ({
  marginLeft,
  marginTop,
  marginBottom,
  marginRight,
  color,
  height,
}: StyleProps) => {
  return (
    <Hr
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginRight={marginRight}
      color={color}
      height={height}
    />
  );
};

export default HorizontalBar;
