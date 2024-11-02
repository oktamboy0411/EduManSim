/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { updateDataCEO } from "../../axios/functions";

export interface CEOState {
  name?: string;
  surname?: string;
  phone_number?: string;
  password?: string;
  img?: string;
  job_title?: string;
  telegram_username?: string;
}

const initialState: { data: CEOState } = {
  data: {
    name: "",
    surname: "",
    phone_number: "",
    password: "",
    img: "",
    job_title: "",
    telegram_username: "",
  },
};

export const CEOSlice = createSlice({
  name: "CEO",
  initialState,
  reducers: {
    patchCEOdata: (state, action: PayloadAction<CEOState>) => {
      state.data = { ...state.data, ...action.payload };
      (async () => {
        const data = { ...state.data, ...action.payload }
        const bool = updateDataCEO(data);
        if (await bool) {
          state.data = data
        }
      })();
    },
  },
});

// Action creators are generated for each case reducer function
export const { patchCEOdata } = CEOSlice.actions;

export default CEOSlice.reducer;
