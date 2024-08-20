import { authApi } from '@/apis/auth-api';
import { Account, LoginResponse, UserInfo } from '@/models';
import { authActions } from '@/redux/auth-slice';
import { history } from '@/utils';
import { PayloadAction } from '@reduxjs/toolkit';

import { call, fork, put, takeLatest } from 'redux-saga/effects';

function* handleLogin(action: PayloadAction<Account>) {
  try {
    const res: LoginResponse = yield call(authApi.login, action.payload);
    localStorage.setItem('access_token', res.access_token);
    localStorage.setItem('refresh_token', res.refresh_token);
    yield put(authActions.loginSuccess(res));
    yield call(history.push, `/home`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('🚀 ~ function*handleLogin ~ error:', error);
    yield put(authActions.loginFailed(error.message));
  }
}
function* fetchUserInfoSaga() {
  try {
    const response: UserInfo = yield call(authApi.getUserInfo);
    yield put(authActions.fetchUserInfoSuccess(response));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
}
function* handleLogout() {
  yield localStorage.clear();
  yield call(history.push, '/');
}

function* watchLoginFlow() {
  yield takeLatest(authActions.login.type, handleLogin);
  yield takeLatest(authActions.fetchUserInfo.type, fetchUserInfoSaga);
  yield takeLatest(authActions.logout.type, handleLogout);
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
