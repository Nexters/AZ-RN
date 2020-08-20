import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type PostActions = ActionType<typeof actions>;

export interface AuthStateTypes {
  isAuthenticated: boolean;
  user: User;
  accessToken: AccessToken;
  refreshToken: string;
  error: string;
  status: number;
}
export interface AccessToken {
  token: string;
  expire: number;
}

export interface User {
  id: number;
  identification: string;
  nickname: string;
  rating: Rating;
}
export type Rating =
  | 'NEW_RECRUIT'
  | 'ASSISTANT_MANAGE'
  | 'DEPARTMENT_HEAD'
  | 'MANAGING_DIRECTOR'
  | 'BOSS';
