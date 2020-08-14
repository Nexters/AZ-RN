import createAsyncThunk from '~/lib/createAsyncThunk';
import callApi from '~/lib/callApi';
import {
  createAccountRequestAsync,
  verifyIdRequestAsync,
  verifyNicknameRequestAsync,
} from './actions';

export const postCreataeAccountThunk = createAsyncThunk(
  createAccountRequestAsync,
  callApi,
);

export const postVerifyIdThunk = createAsyncThunk(
  verifyIdRequestAsync,
  callApi,
);

export const postVerifyNicknameThunk = createAsyncThunk(
  verifyNicknameRequestAsync,
  callApi,
);
