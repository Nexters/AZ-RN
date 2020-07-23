import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type PostActions = ActionType<typeof actions>;

export type UserStateTypes = {
  auth: {
    isAuthenticated: boolean;
  };
};
export type SignInAction = {
  isAuthenticated: boolean;
};
