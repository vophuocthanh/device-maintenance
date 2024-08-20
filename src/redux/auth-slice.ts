import { RootState } from '@/redux/store';
import { UserInfo } from '@/shared/interface/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn?: boolean;
  logging?: boolean;
  error?: string;
  loading: boolean;
  userInfo?: UserInfo;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  error: undefined,
  loading: false,
  userInfo: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.loading = true;
      state.logging = true;
      state.error = '';
    },
    loginSuccess(state) {
      state.loading = false;
      state.logging = false;
      state.isLoggedIn = true;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.logging = false;
      state.error = action.payload;
    },
    logout(state) {
      state.logging = false;
      state.isLoggedIn = false;
    },
    fetchAssetListByUserId(state) {
      state.loading = true;
    },
    fetchAssetListByUserIdFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchUserInfo(state) {
      state.loading = true;
    },
    fetchUserInfoSuccess(state, action: PayloadAction<UserInfo>) {
      state.loading = false;
      state.userInfo = action.payload;
    },
    fetchUserInfoFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export const selectLoginLoading = (state: RootState) => state.auth.loading;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectLoginFailed = (state: RootState) => state.auth.error;
export const selectLogging = (state: RootState) => state.auth.logging;
export const selectError = (state: RootState) => state.auth.error;
export const selectUserInfo = (state: RootState) => state.auth.userInfo;

const authReducer = authSlice.reducer;
export default authReducer;
