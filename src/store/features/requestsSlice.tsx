/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface requestsState {
  name?: string;
  surname?: string;
  phone_number?: string;
  email?: string;
  company_name?: string;
}

const initialState: { data: requestsState[] } = {
  data: [],
};

export const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    addRequestsData: (state, action: PayloadAction<requestsState>) => {
      state.data = [ ...state.data, action.payload ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRequestsData } = requestsSlice.actions;

export default requestsSlice.reducer;
