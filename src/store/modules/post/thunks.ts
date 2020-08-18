import createAsyncThunk from '~/lib/createAsyncThunk';
import callApi from '~/lib/callApi';
import {
  loadPostsRequestAsync,
  loadPostDetailRequestAsync,
  loadCommentsRequestAsync,
} from './actions';

export const getPostsThunk = createAsyncThunk(loadPostsRequestAsync, callApi);

export const getPostDetailThunk = createAsyncThunk(loadPostDetailRequestAsync, callApi);

export const getCommentsThunk = createAsyncThunk(loadCommentsRequestAsync, callApi);
