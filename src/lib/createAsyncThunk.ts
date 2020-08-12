import { AsyncActionCreatorBuilder } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { startLoading, finishLoading } from '~/store/modules/loading/actions';

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;

const createAsyncThunk = <
  A extends AnyAsyncActionCreator,
  F extends (...params: any[]) => Promise<any>
>(
  asyncActionCreator: A,
  promiseCreator: F,
) => {
  type Params = Parameters<F>;
  return (...params: Params) => {
    return async (dispatch: Dispatch) => {
      const { request, success, failure } = asyncActionCreator;
      dispatch(request());
      dispatch(startLoading(request().type));
      try {
        const result = await promiseCreator(...params);
        dispatch(success(result));
        dispatch(finishLoading(request().type));
      } catch ({ response: { data } }) {
        dispatch(failure(data));
        dispatch(finishLoading(request().type));
      }
    };
  };
};

export default createAsyncThunk;
