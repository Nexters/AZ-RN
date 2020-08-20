import React from 'react';
import styled from 'styled-components/native';
import { DARK_GREY } from '~/constants/Colors';

const StickScrollContainer = styled.ScrollView`
  background-color: ${DARK_GREY};
`;

type StickyScrollProps = {
  children: React.ReactChild | React.ReactChild[];
  stickyPosition: number;
};
const StickyScrollView = ({ children, stickyPosition }: StickyScrollProps) => {
  return (
    <StickScrollContainer
      stickyHeaderIndices={[stickyPosition]}
      showsVerticalScrollIndicator={false}>
      {children}
    </StickScrollContainer>
  );
};

export default StickyScrollView;
