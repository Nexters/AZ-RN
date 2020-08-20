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
  url: `${url}/v1/api/posts`,
  method: 'get',
};
// 게시글 상세보기
export const getDetailedPost = {
  url: `${url}/v1/api/posts/:postId`,
  method: 'get',
};
// 게시글에 달린 댓글
export const getCommnets = {
  url: `${url}/v1/api/posts/:postId/comments`,
  method: 'get',
};
// 게시글 작성
export const postCreateContent = {
  url: `${url}/v1/api/posts/post`,
  method: 'post',
};
// 댓글 작성
export const postComment = {
  url: `${url}/v1/api/posts/:postId/comments/comment`,
  method: 'post',
};
