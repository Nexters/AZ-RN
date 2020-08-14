import createAsyncThunk from '~/lib/createAsyncThunk';
import callApi from '~/lib/callApi';
import { verifyIdRequestAsync, verifyNicknameRequestAsync } from './actions';

export const postVerifyIdThunk = createAsyncThunk(
  verifyIdRequestAsync,
  callApi,
);

export const postVerifyNicknameThunk = createAsyncThunk(
  verifyNicknameRequestAsync,
  callApi,
);
