import { AsyncActionCreatorBuilder } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { startLoading, finishLoading } from '~/store/modules/loading/actions';
import { RootState } from '~/store/modules';

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
    return async (dispatch: Dispatch, getState: () => RootState) => {
      const { request, success, failure } = asyncActionCreator;
      const {
        auth: {
          accessToken: { token },
        },
      } = getState();
      dispatch(request());
      dispatch(startLoading(request().type + '_LOADING'));
      try {
        const result = await promiseCreator(
          ...(token.length < 1 ? params : [{ ...params[0], headers: token }]),
        );
        dispatch(success(result));
        dispatch(finishLoading(request().type + '_LOADING'));
        return result;
      } catch ({ response: { data } }) {
        dispatch(failure(data));
        dispatch(finishLoading(request().type + '_LOADING'));
        return data;
      }
    };
  };
};

export default createAsyncThunk;
