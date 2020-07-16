import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface LoadingStateType {
  [key: string]: boolean;
}

export type LoadingActionsTypes = ActionType<typeof actions>;
