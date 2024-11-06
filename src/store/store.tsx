import { configureStore } from "@reduxjs/toolkit";
import { CEOSlice, modalOpenSlice, modalTypeSlice } from "./features";

const store = configureStore({
  reducer: {
    modalOpen: modalOpenSlice,
    CEO: CEOSlice,
    modalType: modalTypeSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
