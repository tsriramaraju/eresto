import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Info } from "interfaces/info";
import { checkStorage, clearStorage, persistStorage } from "utils/localStorage";

const initialState: Info = checkStorage("info") || {
  guests: 0,
  tableNo: 0,
  mobile: 0,
  name: "",
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<Info>) => {
      persistStorage("info", action.payload);
      return action.payload;
    },
    updateInfo: (state, action: PayloadAction<Info>) => {
      persistStorage("info", { ...state, ...action.payload });
      return { ...state, ...action.payload };
    },
    clearInfo: () => {
      clearStorage("info");
      return initialState;
    },
  },
});

export const { setInfo, updateInfo, clearInfo } = infoSlice.actions;

export default infoSlice.reducer;
