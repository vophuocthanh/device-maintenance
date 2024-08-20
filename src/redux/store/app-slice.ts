import { RootState } from '@/redux/store';
import { UserInfo } from '@/shared/interface/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface appState {
  loading: boolean;
  error?: string;
  size?: string;
  userInfo?: UserInfo;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rowSelectionRecord?: any;
  currentThem: string;
}

const initialState: appState = {
  loading: false,
  error: undefined,
  size: undefined,
  userInfo: undefined,
  rowSelectionRecord: undefined,
  currentThem: 'dark',
  // currentThem: 'light'
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppWidth(state, action: PayloadAction<string | undefined>) {
      state.size = action.payload;
    },
    fetchUserInfo(state) {
      state.loading = true;
    },
    fetchUserInfoSuccess(state, action: PayloadAction<UserInfo>) {
      state.userInfo = action.payload;
      state.loading = false;
    },
    fetchUserInfoFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setRowSelectionRecord(state, action: PayloadAction<any>) {
      state.rowSelectionRecord = action.payload;
    },
    setCurrentTheme(state, action: PayloadAction<string>) {
      state.currentThem = action.payload;
    },
  },
});

export const appAction = appSlice.actions;
export const selectAppWidth = (state: RootState) => state.app.size;
export const selectCurrentThem = (state: RootState) => state.app.currentThem;
export const selectUserInfo = (state: RootState) => state.app.userInfo;
export const selectLoading = (state: RootState) => state.app.loading;
export const selectError = (state: RootState) => state.app.error;
export const selectRowSelectionRecord = (state: RootState) =>
  state.app.rowSelectionRecord;
const appReducer = appSlice.reducer;
export default appReducer;
