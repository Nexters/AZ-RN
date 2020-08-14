const url = 'http://ec2-3-34-24-138.ap-northeast-2.compute.amazonaws.com:8080';

export const postCreateAccount = {
  url: `${url}/v1/api/auth/sign-up`,
  method: 'post',
};

export const postIdentificationCheck = {
  url: `${url}/v1/api/users/identifications/:identification/existence`,
  method: 'post',
};
