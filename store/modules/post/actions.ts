import { createAsyncAction } from "typesafe-actions";
import { AxiosError, AxiosResponse } from "axios";

export const LOAD_LIST = "post/LOAD_LIST";
export const LOAD_LIST_SUCCESS = "post/LOAD_LIST_SUCCESS";
export const LOAD_LIST_FAILURE = "post/LOAD_LIST_FAILURE";

export const loadPostListRequestAsync = createAsyncAction(
  LOAD_LIST,
  LOAD_LIST_SUCCESS,
  LOAD_LIST_FAILURE
)<void, AxiosResponse, AxiosError>();
