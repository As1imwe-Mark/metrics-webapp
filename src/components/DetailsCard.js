/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

const DetailsCard = ({ coin }) => (
  <ul className="details-card">
    <div className="details">
      <div className="image-info">
        <div className="image-nav">
          <img src={coin.icon} alt="coin-icon" />
        </div>
        <div>
          <h3>{coin.name}</h3>
          <h3>
            Rank:
            {coin.rank}
          </h3>
        </div>
      </div>
      <h3>
        More
        {' '}
        {coin.name}
        {' '}
        Details
      </h3>
    </div>
    <li>
      <h4>
        Name:
        <span>{coin.name}</span>
      </h4>
    </li>
    <li>
      <h4>
        PriceBtc:
        <span>{coin.priceBtc}</span>
      </h4>
    </li>
    <li>
      <h4>
        Volume:
        <span>{coin.volume}</span>
      </h4>
    </li>
    <li>
      <h4>
        MarketCap:
        <span>{coin.marketCap}</span>
      </h4>
    </li>
    <li>
      <h4>
        AvailableSupply:
        <span>{coin.availableSupply}</span>
      </h4>
    </li>
    <li>
      <h4>
        TotalSupply:
        <span>{coin.totalSupply}</span>
      </h4>

    </li>
    <li>
      <h4>
        PriceChange1h:
        <span>{coin.priceChange1h}</span>
      </h4>
    </li>
    <li>
      <h4>
        PriceChange1d:
        <span>{coin.priceChange1d}</span>
      </h4>
    </li>
    <li>
      <h4>
        PriceChange1w:
        <span>{coin.priceChange1w}</span>
      </h4>
    </li>
    <li>
      <h4>
        WebsiteUrl:
        <span><a href={coin.websiteUrl}>{coin.websiteUrl}</a></span>
      </h4>
    </li>
    <li>
      <h4>
        TwitterUrl:
        <span><a href={coin.twitterUrl}>{coin.twitterUrl}</a></span>
      </h4>
    </li>
  </ul>
);

DetailsCard.propTypes = {
  coin: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    priceBtc: PropTypes.number.isRequired,
    volume: PropTypes.number.isRequired,
    marketCap: PropTypes.number.isRequired,
    availableSupply: PropTypes.number.isRequired,
    totalSupply: PropTypes.number.isRequired,
    priceChange1h: PropTypes.number.isRequired,
    priceChange1d: PropTypes.number.isRequired,
    priceChange1w: PropTypes.number.isRequired,
    websiteUrl: PropTypes.string.isRequired,
    twitterUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsCard;
