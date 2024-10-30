import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const modalOpenSlice = createSlice({
  name: "modalOpen",
  initialState,
  reducers: {
    setModalOpen: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setModalOpen } = modalOpenSlice.actions;

export default modalOpenSlice.reducer;
