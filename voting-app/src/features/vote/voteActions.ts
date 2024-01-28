import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VoteActions {
  // Define your state structure here
}

const initialState: VoteActions = {
  // Initial state
};

export const voteActions = createSlice({
  name: 'vote',
  initialState,
  reducers: {
    // Reducers go here
  },
});

export const { /* exported actions */ } = voteActions.actions;
export default voteActions.reducer;