/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterCoins } from '../redux/feature/coinSlice';

const CoinsCard = ({ coin }) => {
  const dispatch = useDispatch();
  const displayDetails = (id) => {
    dispatch(filterCoins(id));
  };

  return (
    <Link
      className="card"
      onClick={() => {
        displayDetails(coin.id);
      }}
      to="/details"
    >
      <section>
        <div className="icon">
          <img src={coin.icon} alt="coin-icon" />
        </div>
        <div className="coin-info">
          <p className="rank">
            Rank: #
            {coin.rank}
          </p>
          <p>
            {coin.name}
            {' '}
            {coin.symbol}
          </p>
          <p className="price">
            Price:
            {' '}
            {coin.price}
          </p>
        </div>
      </section>
    </Link>
  );
};

export default CoinsCard;
