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
          accessToken: { token: accessToken },
        },
      } = getState();
      dispatch(request());
      dispatch(startLoading(request().type + '_LOADING'));
      try {
        const result = await promiseCreator(
          ...(accessToken.length < 1
            ? params
            : [
                {
                  ...params[0],
                  headers: {
                    accessToken,
                  },
                },
              ]),
        );
        dispatch(success(result));
        dispatch(finishLoading(request().type + '_LOADING'));
        return result;
      } catch ({ response: { data, status } }) {
        const result = {
          status,
        };

        dispatch(failure(result));
        dispatch(finishLoading(request().type + '_LOADING'));
        return result;
      }
    };
  };
};

export default createAsyncThunk;
