import React from 'react';
import styled from 'styled-components/native';
import { WHITE } from '~/constants/Colors';
import { Text, Rowbox } from '../Atoms';
import { MarginStyleProps } from '~/@types';

const Container = styled.View<MarginStyleProps>`
  padding-bottom: 16px;
  border-bottom-color: ${WHITE};
  border-bottom-width: 1;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0px'};
`;

interface CommentLog extends MarginStyleProps {
  comment: string;
  createdAt: string;
}

const CommentLog = ({ comment, createdAt, marginBottom }: CommentLog) => {
  return (
    <Container marginBottom={marginBottom}>
      <Rowbox justifyContent="space-between">
        <Rowbox width="80%">
          <Text fontWeight={600} fontSize="16px" text={comment} />
        </Rowbox>
        <Text fontWeight={300} fontSize="11px" text={createdAt} />
      </Rowbox>
    </Container>
  );
};

export default CommentLog;
