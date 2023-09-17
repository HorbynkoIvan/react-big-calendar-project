import { configureStore } from "@reduxjs/toolkit";

import { testReducer } from "./modules/test";
import { calendarReducer } from "./modules/calendar";

const preloadedState = {};

export const store = configureStore({
  reducer: {
    test: testReducer,
    calendar: calendarReducer,
  },
  preloadedState,
});
