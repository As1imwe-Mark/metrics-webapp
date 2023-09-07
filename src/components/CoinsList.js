import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCoins } from '../redux/feature/coinSlice';
import CoinsCard from './coinsCard';

const CoinsList = () => {
  const { coins, isLoading } = useSelector((store) => store.coin);
  const [filter, setFilter] = useState('');
  // eslint-disable-next-line
  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  const filteredCoins = coins.filter((coin) => (
    coin.name.toLowerCase().includes(filter.toLowerCase())
  ));

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
      {filteredCoins.map((coin) => (
        <CoinsCard key={coin.rank} coin={coin} />
      ))}
    </article>
  );
};
export default CoinsList;
