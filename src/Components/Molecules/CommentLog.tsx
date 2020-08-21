import React from 'react';
import styled from 'styled-components/native';
import { WHITE } from '~/constants/Colors';
import { Text, Rowbox } from '../Atoms';
import { MarginStyleProps } from '~/@types';
import { Comment } from '~/store/modules/post/types';
import { getUniqueKey } from '~/lib';

const Container = styled.TouchableOpacity<MarginStyleProps>`
  padding-bottom: 16px;
  border-bottom-color: ${WHITE};
  border-bottom-width: 1px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? '0px'};
`;

interface CommentLog extends MarginStyleProps {
  commentOption: Comment;
  handleNavigateToPostDeatil: (postid: number) => Promise<void>;
}

const CommentLog = ({ commentOption, marginBottom, handleNavigateToPostDeatil }: CommentLog) => {
  const { commentList } = commentOption;
  return (
    <>
      {commentList?.length > 0 ? (
        commentList.map((comment) => (
          <Container
            marginBottom={marginBottom}
            onPress={() => {
              handleNavigateToPostDeatil(comment.postId);
            }}
            key={getUniqueKey(comment.id)}>
            <Rowbox justifyContent="space-between">
              <Rowbox width="80%">
                <Text fontWeight={600} fontSize="16px" text={comment.content} color={WHITE} />
              </Rowbox>
              <Text fontWeight={300} fontSize="11px" text={comment.createdDate} />
            </Rowbox>
          </Container>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default CommentLog;
