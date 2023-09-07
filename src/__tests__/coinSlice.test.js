import coinReducer, { filterCoins } from '../redux/feature/coinSlice';

jest.mock('../redux/feature/coinSlice');

describe('Coin reducers testing', () => {
  it('Should filter all coins whose show property is true ', () => {
    const reducer = filterCoins(1);
    const state = coinReducer(undefined, reducer);
    expect(state.coins[0].show).toBeTruthy();
  });
});
