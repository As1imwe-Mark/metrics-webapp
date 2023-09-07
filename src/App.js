import { Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </main>
  );
}
export default App;
