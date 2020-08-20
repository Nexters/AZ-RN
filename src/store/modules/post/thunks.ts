import createAsyncThunk from '~/lib/createAsyncThunk';
import callApi from '~/lib/callApi';
import {
  loadPostsRequestAsync,
  loadPostDetailRequestAsync,
  loadCommentsRequestAsync,
  createPostRequestAsync,
  postCommentRequestAsync,
  postCreateLikeRequestAsync,
} from './actions';

export const getPostsThunk = createAsyncThunk(loadPostsRequestAsync, callApi);

export const getPostDetailThunk = createAsyncThunk(loadPostDetailRequestAsync, callApi);

export const getCommentsThunk = createAsyncThunk(loadCommentsRequestAsync, callApi);

export const postCreateContentThunk = createAsyncThunk(createPostRequestAsync, callApi);

export const postCommentThunk = createAsyncThunk(postCommentRequestAsync, callApi);

export const postCreateLikeThunk = createAsyncThunk(postCreateLikeRequestAsync, callApi);
