import { useSelector } from 'react-redux';
import DetailsCard from './DetailsCard';

const Details = () => {
  const coins = useSelector((store) => store.coin.coins);
  const filteredCoins = coins.filter((coin) => coin.show === true);
  return (
    <section className="coin-details">
      {filteredCoins?.map((coin) => filteredCoins && <DetailsCard key={coin.rank} coin={coin} />)}
    </section>
  );
};
export default Details;
