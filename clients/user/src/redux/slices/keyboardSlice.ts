import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../reduxStore";

const initialState = false;

export const keyboardSlice = createSlice({
  name: "keyboard",
  initialState,
  reducers: {
    setKeyboard: (state, action: PayloadAction<boolean>) => (state = action.payload),
  },
});

export const { setKeyboard } = keyboardSlice.actions;

export const selectKeyboard = (state: RootState) => state.keyboard;

export default keyboardSlice.reducer;
