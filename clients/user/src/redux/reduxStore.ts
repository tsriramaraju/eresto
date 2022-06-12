import { configureStore } from "@reduxjs/toolkit";
import keyboardReducer from "./slices/keyboardSlice";
import pathReducer from "./slices/pathSlice";
import infoReducer from "./slices/infoSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    keyboard: keyboardReducer,
    path: pathReducer,
    info: infoReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
