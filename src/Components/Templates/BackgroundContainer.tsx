import React from 'react';
import styled from 'styled-components/native';
import { DARK_GREY } from '~/constants/Colors';

const Container = styled.View<StyleProps>`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor ?? `${DARK_GREY}`};
`;

interface StyleProps {
  bgColor?: string;
}
interface BackgroundContainerProps extends StyleProps {
  children: React.ReactChild | React.ReactChild[];
}
const BackgroundContainer = ({ children, bgColor }: BackgroundContainerProps) => {
  return <Container bgColor={bgColor}>{children}</Container>;
};

export default BackgroundContainer;
