import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCoins } from '../redux/feature/coinSlice';
import CoinsCard from './coinsCard';

const CoinsList = () => {
  const { coins, isLoading } = useSelector((store) => store.coin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">Loading...</div>
    );
  }

  return (
    <article className="coins-list">
      {coins.map((coin) => (
        <CoinsCard key={coin.rank} coin={coin} />
      ))}
    </article>
  );
};
export default CoinsList;
