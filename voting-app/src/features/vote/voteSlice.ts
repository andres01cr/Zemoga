import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VoteState {
  // Define your state structure here
}

const initialState: VoteState = {
  // Initial state
};

export const voteSlice = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    // Reducers go here
  },
});

export const { /* exported actions */ } = voteSlice.actions;
export default voteSlice.reducer;