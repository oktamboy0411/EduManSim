import { createSlice } from "@reduxjs/toolkit";

export interface modalOpenState {
  value: boolean;
}

const initialState: modalOpenState = {
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
