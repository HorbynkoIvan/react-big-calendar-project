import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../interfaces";

const initialState = {
  currentView: "month",
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<any>) => {
      // console.log(action.payload);
      state.currentView = action.payload;
    },
  },
});

// actions
export const { setView } = calendarSlice.actions;

// SELECTORS START
export const selectorCurrentView = (state: RootState) => state.calendar.currentView;
// SELECTORS END

export const calendarReducer = calendarSlice.reducer;
