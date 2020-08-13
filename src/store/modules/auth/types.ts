import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type PostActions = ActionType<typeof actions>;

export interface AuthStateTypes {
  user: User;
  accessToken: AccessToken;
  refreshToken: string;
  error: string;
  status: number;
  duplicateCheck: DuplicateCheck;
}
interface DuplicateCheck {
  isIdUsed: undefined | boolean;
  isNicknameUsed: undefined | boolean;
}
export interface AccessToken {
  token: string;
  expire: number;
}

export interface User {
  id: number;
  identification: string;
  nickname: string;
  rating: string;
}
