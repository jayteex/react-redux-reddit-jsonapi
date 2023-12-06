import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  searchTerm: string;
}

const initialState: SearchState = {
  searchTerm: "",

}

//Slice for the Search component. Gets used in the store.ts file
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },

  },

});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
