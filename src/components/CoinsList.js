/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCoins } from '../redux/feature/coinSlice';
import CoinsCard from './coinsCard';

const CoinsList = () => {
  const { coins, isLoading } = useSelector((store) => store.coin);
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(filter.toLowerCase()));

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <div className="search">
        <h3>Search by Name</h3>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={handleSearch}
        />
      </div>
      <article className="coins-list">
        {filteredCoins.map((coin) => (
          <CoinsCard key={coin.id} coin={coin} />
        ))}
      </article>
    </div>
  );
};

export default CoinsList;
