import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VoteSelectors {
  // Define your state structure here
}

const initialState: VoteSelectors = {
  // Initial state
};

export const voteSelectors = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    // Reducers go here
  },
});

export const { /* exported actions */ } = voteSelectors.actions;
export default voteSelectors.reducer;