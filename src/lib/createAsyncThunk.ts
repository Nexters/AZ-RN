import { AsyncActionCreatorBuilder } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { startLoading, finishLoading } from '~/store/modules/loading/actions';
import { RootState } from '~/store/modules';

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;
const accessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiIxNSIsInN1YiI6IkFjY2Vzc1Rva2VuIiwiaWF0IjoxNTk3NzMwODYwLCJleHAiOjE1OTc3MzQ0NjB9.RHaeN4790lt7IMA15C9lLbQvl9T7vNp1ZbMmDtlCsX-MAu1o8sjiIDSvlO4Ob4RN6WjV7C2cBLSHzBqWT_gzdQ';
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
          ...(token.length < 1
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
      } catch ({
        response: {
          data: { error },
          status,
        },
      }) {
        const result = {
          status,
          error,
        };

        dispatch(failure(result));
        dispatch(finishLoading(request().type + '_LOADING'));
        return result;
      }
    };
  };
};

export default createAsyncThunk;
