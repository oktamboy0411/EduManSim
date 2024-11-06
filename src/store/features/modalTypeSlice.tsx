import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface modalTypeState {
  value: string;
}

const initialState: modalTypeState = {
  value: "",
};

export const modalTypeSlice = createSlice({
  name: "modalType",
  initialState,
  reducers: {
    setModalType: (state, action: PayloadAction<modalTypeState>) => {
      state.value = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setModalType } = modalTypeSlice.actions;

export default modalTypeSlice.reducer;
