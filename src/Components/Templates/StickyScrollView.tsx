import React from 'react';
import styled from 'styled-components/native';
import { DARK_GREY } from '~/constants/Colors';
import { RefreshControl } from 'react-native';

const StickScrollContainer = styled.ScrollView`
  background-color: ${DARK_GREY};
`;

type StickyScrollProps = {
  children: React.ReactChild | React.ReactChild[];
  stickyPosition: number;
  isLoading?: boolean;
  fething?: () => void;
};
const StickyScrollView = ({ children, stickyPosition, isLoading, fething }: StickyScrollProps) => {
  return (
    <StickScrollContainer
      stickyHeaderIndices={[stickyPosition]}
      showsVerticalScrollIndicator={false}
      refreshControl={
        typeof isLoading === 'boolean' ? (
          <RefreshControl tintColor="#f8f8ff" refreshing={isLoading} onRefresh={fething} />
        ) : undefined
      }>
      {children}
    </StickScrollContainer>
  );
};

export default StickyScrollView;
