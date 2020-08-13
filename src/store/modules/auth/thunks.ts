import createAsyncThunk from '~/lib/createAsyncThunk';
import callApi from '~/lib/callApi';
import { createAccountRequestAsync, verifyInRequestAsync } from './actions';

export const postCreataeAccountThunk = createAsyncThunk(
  createAccountRequestAsync,
  callApi,
);

export const postVerifyIdThunk = createAsyncThunk(
  verifyInRequestAsync,
  callApi,
);
