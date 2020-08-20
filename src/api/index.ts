const url = 'http://ec2-3-34-24-138.ap-northeast-2.compute.amazonaws.com:8080';

export const postCreateAccount = {
  // 회원가입
  url: `${url}/v1/api/auth/sign-up`,
  method: 'post',
};
export const postIdentificationCheck = {
  // 아이디 중복 체크
  url: `${url}/v1/api/users/identifications/:identification/existence`,
  method: 'post',
};
export const postNicknameCheck = {
  // 닉네임 중복체크
  url: `${url}/v1/api/users/nicknames/:nickname/existence`,
  method: 'post',
};
export const getPosts = {
  // 게시글 조회
  url: `${url}/v1/api/posts?currentPage=:currentPage&size=:size`,
  method: 'get',
};
export const getDetailedPost = {
  // 게시글 상세보기
  url: `${url}/v1/api/posts/:postId`,
  method: 'get',
};
export const getCommnets = {
  // 게시글에 달린 댓글
  url: `${url}/v1/api/posts/:postId/comments?currentPage=:currentPage&size=:size`,
  method: 'get',
};
export const postCreateContent = {
  // 게시글 작성
  url: `${url}/v1/api/posts/post`,
  method: 'post',
};
export const postComment = {
  // 댓글 작성
  url: `${url}/v1/api/posts/:postId/comments/comment`,
  method: 'post',
};
export const getMyComments = {
  // 내가 쓴 댓글
  url: `${url}/v1/api/users/:userId/comments`,
  method: 'get',
};

export const getMyPosts = {
  // 내가 쓴 게시글
  url: `${url}/v1/api/users/:userId/posts`,
  method: 'get',
};
export const getMyBookmarkPosts = {
  // 내가 북마크 한 글
  url: `${url}/v1/api/users/:userId/bookmark/posts`,
  method: 'get',
};
export const postLike = {
  // 게시글 좋아요
  url: `${url}/v1/api/posts/:postId/likes`,
  method: 'post',
};
export const postBookmark = {
  // 게시글 북마크
  url: `${url}/v1/api/users/bookmark/posts/:postId`,
  method: 'post',
};
export const deleteBookmark = {
  // 게시글 북마크 취소
  url: `${url}/v1/api/users/bookmark/posts/:postId`,
  method: 'delete',
};
