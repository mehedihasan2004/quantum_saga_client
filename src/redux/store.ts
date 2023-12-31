import { configureStore } from "@reduxjs/toolkit";
import api from "./apiSlice";
import bookApi from "./features/book/bookApi";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
