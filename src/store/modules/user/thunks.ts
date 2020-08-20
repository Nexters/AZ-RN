import createAsyncThunk from '~/lib/createAsyncThunk';
import callApi from '~/lib/callApi';
import {
  verifyIdRequestAsync,
  verifyNicknameRequestAsync,
  loadMyPostsRequestAsync,
  loadMyCommentsRequestAsync,
  loadMyBookmarkPostsRequestAsync,
  loadMyRatingRequestAsync,
} from './actions';

export const postVerifyIdThunk = createAsyncThunk(verifyIdRequestAsync, callApi);

export const postVerifyNicknameThunk = createAsyncThunk(verifyNicknameRequestAsync, callApi);

export const getMyPostsThunk = createAsyncThunk(loadMyPostsRequestAsync, callApi);

export const getMyCommentsThunk = createAsyncThunk(loadMyCommentsRequestAsync, callApi);

export const getMyBookmarkPostsThunk = createAsyncThunk(loadMyBookmarkPostsRequestAsync, callApi);

export const getMyRatingThunk = createAsyncThunk(loadMyRatingRequestAsync, callApi);
