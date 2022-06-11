import { configureStore } from "@reduxjs/toolkit";
import keyboardReducer from "./slices/keyboardSlice";
import pathReducer from "./slices/pathSlice";

export const store = configureStore({
  reducer: {
    keyboard: keyboardReducer,
    path: pathReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
