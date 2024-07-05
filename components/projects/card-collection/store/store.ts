import { configureStore } from "@reduxjs/toolkit";
import collectionSlice from "./reducer";

export const store = configureStore({
  reducer: {
    collection: collectionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
