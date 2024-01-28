import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VoteApi {
  // Define your state structure here
}

const initialState: VoteApi = {
  // Initial state
};

export const voteApi = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    // Reducers go here
  },
});

export const { /* exported actions */ } = voteApi.actions;
export default voteApi.reducer;