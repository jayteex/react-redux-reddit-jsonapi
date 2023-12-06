import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InputState {
    selectedSubreddit: string;
  }

const initialState: InputState = {
    selectedSubreddit: "popular",

  }

//Slice for the Input component. Gets used in the store.ts file
export const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        setSelectedSubreddit: (state, action: PayloadAction<string>) => {
            state.selectedSubreddit = action.payload;
        }

    },

});

export const { setSelectedSubreddit } = inputSlice.actions;
export default inputSlice.reducer;
