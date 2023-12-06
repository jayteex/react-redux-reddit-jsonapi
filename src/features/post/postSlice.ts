import { createSlice } from "@reduxjs/toolkit"

//TypeScript interfaces
export interface PostState {
    data: any
    error: any
    loading: boolean
  }

const initialState: PostState = {
    data: [],
    loading: false,
    error: null
  }

//Slice for the Post component. Gets used in the store.ts file
export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        fetchPostRequest: (state) => {
          state.loading = true;
          state.error = null;
        },
        fetchPostSuccess: (state, action) => {
          state.loading = false;
          state.data = action.payload;
        },
        fetchPostFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      },

});

export const { fetchPostRequest, fetchPostSuccess, fetchPostFailure } = postSlice.actions;
export default postSlice.reducer;