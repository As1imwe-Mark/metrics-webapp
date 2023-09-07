import { Link } from 'react-router-dom';

const coins = [
  {
    name: 'BitCoin',
    id: 1,
    icon: 'icons',
    rank: 2,
    symbol: 'Btc',
    price: 12233.233,
  },
  {
    name: 'Ethereum',
    id: 2,
    icon: 'icons',
    rank: 3,
    symbol: 'Etc',
    price: 1223.233,
  },
];

const CoinsList = () => (
  <article className="coins-list">
    {coins.map((coin) => (
      <Link
        key={coin.id}
        className="card"
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
    ))}
  </article>
);

export default CoinsList;
