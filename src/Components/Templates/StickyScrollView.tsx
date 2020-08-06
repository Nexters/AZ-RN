import React from 'react';
import styled from 'styled-components/native';

const StickScrollContainer = styled.ScrollView``;

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
