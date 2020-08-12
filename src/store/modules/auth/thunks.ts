import createAsyncThunk from 'lib/createAsyncThunk';
import callApi from 'lib/callApi';
import { createAccountRequestAsync } from './actions';

export const postCreataeAccountThunk = createAsyncThunk(
  createAccountRequestAsync,
  callApi,
);
