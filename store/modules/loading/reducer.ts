import { createReducer } from "typesafe-actions";
import { LoadingStateType, LoadingActionsTypes } from "./types";
import { START_LOADING, FINISH_LOADING } from "./actions";

const initialState = {};

const loadingReducer = createReducer<LoadingStateType, LoadingActionsTypes>(
  initialState,
  {
    [START_LOADING]: (state, action) => {
      return {
        ...state,
        [action.payload]: true,
      };
    },
    [FINISH_LOADING]: (state, action) => {
      return {
        ...state,
        [action.payload]: false,
      };
    },
  }
);

export default loadingReducer;
