import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SegmentedValue } from 'antd/es/segmented';
import { RootState } from '../../app/store';

export interface homeState {
  valueSegOrder: SegmentedValue;
  valueSelectedArea: string;
}

const initialState: homeState = {
  valueSegOrder: 'all',
  valueSelectedArea: 'all',
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSegmentedOder(state, action: PayloadAction<SegmentedValue>) {
      state.valueSegOrder = action.payload;
    },
    SetValueSelectedArea(state, action: PayloadAction<string>) {
      state.valueSelectedArea = action.payload;
    },
  },
});

export const homeAction = homeSlice.actions;

export const selectValueDegOrder = (state: RootState) => state.home.valueSegOrder;
export const selectValueSelectedArea = (state: RootState) => state.home.valueSelectedArea;

const homeReducer = homeSlice.reducer;
export default homeReducer;
