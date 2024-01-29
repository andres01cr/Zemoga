import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {  Card } from '../interfaces/types';

interface VoteState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: VoteState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk('voting/fetchData', async () => {
  const response = await fetch('/api/data'); 
  const data = await response.json();
  return data;
});

export const votingSlice = createSlice({
  name: 'voting',
  initialState,
  reducers: {
    vote: (state, action: PayloadAction<{ id: string; voteType: 'positive' | 'negative' }>) => {
      const { id, voteType } = action.payload;
      const cardIndex = state.data.findIndex(card => card.name === id);
      if (cardIndex !== -1) {
        state.data[cardIndex].votes[voteType] += 1;
      }
    },
    setData: (state, action: PayloadAction<Card[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export const { vote, setData} = votingSlice.actions;
export default votingSlice.reducer;