import React from 'react';
import styled from 'styled-components/native';
import { WHITE } from '~/constants/Colors';
import { MarginStyleProps } from '~/@types';
import { Rowbox, Text, Image } from '../Atoms';
import crownPng from '@png/crown.png';
import fillBookmarkPng from '@png/fill_bookmark.png';
import HearAndComment from './HearAndComment';
import { marginStyles } from '~/styles/mixin';
import { Post } from '~/store/modules/post/types';
import { getUniqueKey } from '~/lib';

const Container = styled.TouchableOpacity<MarginStyleProps>`
  width: 100%;
  height: 87px;
  justify-content: space-between;
  padding: 18px 18px 18px 18px;
  background: ${WHITE};
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  ${marginStyles};
`;

interface MiniPostCard extends MarginStyleProps {
  postOption: Post;
  handleNavigateToPostDeatil: (postId: number) => Promise<void>;
}
const MiniPostCard = ({ marginBottom, postOption, handleNavigateToPostDeatil }: MiniPostCard) => {
  const { posts } = postOption;
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Container
            marginBottom={marginBottom}
            key={getUniqueKey(post.id)}
            onPress={() => {
              handleNavigateToPostDeatil(post.id);
            }}>
            <Rowbox justifyContent="space-between">
              <Rowbox width="230px">
                <Text fontSize="16px" fontWeight={800} text={post.content} color="#333333" />
              </Rowbox>
              <Rowbox width="auto">
                {/* <Image
                  imgSrc={crownPng}
                  marginLeft="4px"
                  width="22px"
                  height="18px"
                  marginRight="5px"
                /> */}
                {post.pressBookMark && (
                  <Image imgSrc={fillBookmarkPng} marginLeft="4px" width="18px" height="18px" />
                )}
              </Rowbox>
            </Rowbox>
            <Rowbox justifyContent="space-between">
              <HearAndComment
                pressLike={post.pressLike}
                heartCount={post.likes}
                commentCount={post.commentCount}
                heartWidth="20px"
                heartHeight="20px"
                commentWidth="16px"
                commentHeight="16px"
              />
              <Text fontSize="12px" fontWeight={300} text={post.createdDate} />
            </Rowbox>
          </Container>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default MiniPostCard;
