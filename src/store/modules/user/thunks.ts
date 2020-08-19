import createAsyncThunk from '~/lib/createAsyncThunk';
import callApi from '~/lib/callApi';
import {
  verifyIdRequestAsync,
  verifyNicknameRequestAsync,
  LoadMyPostsRequestAsync,
  LoadMyCommentsRequestAsync,
} from './actions';

export const postVerifyIdThunk = createAsyncThunk(verifyIdRequestAsync, callApi);

export const postVerifyNicknameThunk = createAsyncThunk(verifyNicknameRequestAsync, callApi);

export const getMyPostsThunk = createAsyncThunk(LoadMyPostsRequestAsync, callApi);

export const getMyCommentsThunk = createAsyncThunk(LoadMyCommentsRequestAsync, callApi);
