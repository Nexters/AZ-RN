import { PayloadAction, createReducer } from 'typesafe-actions';
import { AxiosResponse } from 'axios';
import { PostActions } from './types';
import { LOAD_LIST } from './actions';

type PayloadType<Action extends string, T> = PayloadAction<Action, T>;

const initialState: any = {};

const postReducer = createReducer<AxiosResponse, PostActions>(initialState, {
  [LOAD_LIST]: (state, action) => state,
});

export default postReducer;
