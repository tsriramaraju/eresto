import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../reduxStore";

const initialState = "";

export const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    setPath: (state, action: PayloadAction<string>) => (state = action.payload),
  },
});

export const { setPath } = pathSlice.actions;

export default pathSlice.reducer;
