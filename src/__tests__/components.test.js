import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CoinsList from '../components/CoinsList';
import Details from '../components/Details';
import { Microphone, NavArrow, Settings } from '../components/NavIcons';
import Nav from '../components/Nav';
import Home from '../components/Home';

jest.mock('../components/CoinsList');
jest.mock('../components/Details');
jest.mock('../components/NavIcons');
jest.mock('../components/Nav');
jest.mock('../components/Home');

describe('Testing Rendering', () => {
  it('Should render All coins', () => {
    const coinsList = render(<Router><CoinsList /></Router>);
    expect(coinsList).toMatchSnapshot();
  });

  it('Should render All filtered coins Details', () => {
    const details = render(<Details />);
    expect(details).toMatchSnapshot();
  });

  it('Should render All Home items', () => {
    const home = render(<Router><Home /></Router>);
    expect(home).toMatchSnapshot();
  });

  it('Should render A nav back Icon', () => {
    const navArrow = render(<NavArrow />);
    expect(navArrow).toMatchSnapshot();
  });

  it('Should render A settings Icon', () => {
    const settings = render(<Settings />);
    expect(settings).toMatchSnapshot();
  });

  it('Should render A microphone Icon', () => {
    const microphone = render(<Microphone />);
    expect(microphone).toMatchSnapshot();
  });

  it('Should render the Apps Nav-bar', () => {
    const nav = render(<Nav />);
    expect(nav).toMatchSnapshot();
  });
});
