import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
  try {
    const res = await axios.get('https://api.coinstats.app/public/v1/coins');
    return res.data.coins;
  } catch (error) {
    throw Error(`Error fetching coins: ${error.message}`);
  }
});

const initialState = {
  coins: [],
  isLoading: false,
  isError: null,
};

const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    filterCoins: (state, action) => {
      state.coins = state.coins.map((coin) => {
        if (coin.id === action.payload) {
          return { ...coin, show: true };
        }
        return coin;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.coins = action.payload;
        state.isError = null;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export const { filterCoins } = coinSlice.actions;
export default coinSlice.reducer;
