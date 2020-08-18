import createAsyncThunk from '~/lib/createAsyncThunk';
import callApi from '~/lib/callApi';
import { loadPostsRequestAsync } from './actions';

export const getPromotionListThunk = createAsyncThunk(loadPostsRequestAsync, callApi);
