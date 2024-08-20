import authReducer from '@/redux/auth-slice';
import appReducer from '@/redux/store/app-slice';
import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import homeReducer from '../pages/home/homeSlice';
import { history } from '../utils';
import rootSaga from './root-saga';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  home: homeReducer,
  // storage: storageReducer,
});
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
