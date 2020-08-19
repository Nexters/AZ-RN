import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export type UserActions = ActionType<typeof actions>;

export type UserStateTypes = {
  error: string;
  status: number;
  duplicateCheck: DuplicateCheck;
};
export type ReqError = {
  status: number;
  error: string;
};
interface DuplicateCheck {
  isIdUsed: undefined | boolean;
  isNicknameUsed: undefined | boolean;
}
