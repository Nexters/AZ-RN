import createAsyncThunk from '~/lib/createAsyncThunk';
import callApi from '~/lib/callApi';
import { loadPostListRequestAsync } from './actions';

export const getPromotionListThunk = createAsyncThunk(
  loadPostListRequestAsync,
  callApi,
);
