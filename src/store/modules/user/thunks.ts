import createAsyncThunk from '~/lib/createAsyncThunk';
import callApi from '~/lib/callApi';
import { postLoginRequestAsync } from './actions';

export const getPromotionListThunk = createAsyncThunk(
  postLoginRequestAsync,
  callApi,
);
