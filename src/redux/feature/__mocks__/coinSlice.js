import { createSlice } from '@reduxjs/toolkit';

const coins = [
  {
    name: 'BitCoin',
    id: 1,
    icon: 'icons',
    rank: 2,
    symbol: 'Btc',
    price: 12233.233,
    show: false,
  },
  {
    name: 'Etherel',
    id: 2,
    icon: 'icons',
    rank: 3,
    symbol: 'Etc',
    price: 1223.233,
    show: true,
  },
];

const initialState = {
  coins,
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
});

export const { filterCoins } = coinSlice.actions;
export default coinSlice.reducer;
