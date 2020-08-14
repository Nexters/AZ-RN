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
