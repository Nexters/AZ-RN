import createAsyncThunk from '~/lib/createAsyncThunk';
import callApi from '~/lib/callApi';
import { loadPostsRequestAsync } from './actions';

export const getPostsThunk = createAsyncThunk(loadPostsRequestAsync, callApi);
