/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
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
            {' '}
            {coin.rank}
          </p>
          <p>
            {' '}
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

CoinsCard.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CoinsCard;
