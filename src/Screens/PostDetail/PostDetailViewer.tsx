import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

import { SectionWrapper, NoSafeArea } from '~/Components/Templates';
import PostDetailCard from '~/Components/Molecules/PostDetailCard';
import { Colbox, Toast } from '~/Components/Atoms';
import { Comment, StickyKeyboard } from '~/Components/Molecules';
import { getUniqueKey } from '~/lib';
import { PostDetail } from '~/store/modules/post/types';
import { CommentList } from '~/store/modules/post/types';

import { InputBindType } from '~/hooks/useHandleInput';

const Scroll = styled.ScrollView``;

interface PostDetailProps {
  showPostCommentToast: boolean;
  keyboardHeigth: any;
  post: PostDetail;
  handlePressLike: (postId: number) => void;
  handlePressBookmark: (postId: number) => void;
  handlePressDeleteBookmark: (postId: number) => void;
  commentList: CommentList[];
  inputRef: React.RefObject<TextInput>;
  commentBinder: InputBindType;
  handleOnPress: () => void;
}

const PostDetailViewer = ({
  showPostCommentToast,
  keyboardHeigth,
  post,
  handlePressLike,
  handlePressBookmark,
  handlePressDeleteBookmark,
  commentList,
  inputRef,
  commentBinder,
  handleOnPress,
}: PostDetailProps) => {
  return (
    <NoSafeArea>
      <Toast
        visible={showPostCommentToast}
        animation={true}
        hideOnPress={true}
        message="댓글 작성 완료"
      />
      <Scroll
        style={{
          marginBottom: keyboardHeigth,
        }}>
        <SectionWrapper justifyContent="flex-start" isDisable={true}>
          <PostDetailCard
            postDetailProps={post}
            handlePressLike={handlePressLike}
            handlePressBookmark={handlePressBookmark}
            handlePressDeleteBookmark={handlePressDeleteBookmark}
          />
          <Colbox marginTop="15px">
            {commentList.length > 0 &&
              commentList.map(({ id, content, createdDate, modifiedDate, postId, writer }) => (
                <Comment
                  key={getUniqueKey(id)}
                  content={content}
                  createdDate={createdDate}
                  id={id}
                  modifiedDate={modifiedDate}
                  postId={postId}
                  writer={writer}
                />
              ))}
          </Colbox>
        </SectionWrapper>
      </Scroll>
      <StickyKeyboard inputRef={inputRef} inputBinder={commentBinder} onPress={handleOnPress} />
    </NoSafeArea>
  );
};

export default PostDetailViewer;
