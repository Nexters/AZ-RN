import createAsyncThunk from '~/lib/createAsyncThunk';
import callApi from '~/lib/callApi';
import { createAccountRequestAsync, postLoginRequestAsync } from './actions';

export const postCreataeAccountThunk = createAsyncThunk(createAccountRequestAsync, callApi);

export const postLoginThunk = createAsyncThunk(postLoginRequestAsync, callApi);
