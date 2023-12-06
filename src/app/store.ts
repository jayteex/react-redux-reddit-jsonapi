import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
import inputReducer from "../features/input/inputSlice";
import searchReducer from "../features/search/searchSlice";

//The store. Initial config via vite template
export const store = configureStore({
  reducer: {
    post: postReducer,
    input: inputReducer,
    search: searchReducer,
  },
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
