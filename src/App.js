import { useEffect, useState } from 'react';
import './App.css';
import DiscoverTiles from './components/DiscoverTiles/DiscoverTiles';
import Loader from './components/Loader';
import MiniNews from './components/MiniNews';
import MiniNews2 from './components/MiniNews2/MiniNews2';
import MiniNews2Flex from './components/MiniNews2Flex/MiniNews2Flex';
import NavBar from './components/NavBar';
import NewsTile from './components/NewsTile/NewsTile';
import NewsTile2 from './components/NewsTile2/NewsTile2';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Weather from './components/Weather/Weather';
import { API_KEY, API_URL } from './constants';
import { globalData } from './globalData'
import ReadMore from './components/ReadMoreTile'
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ShowNews from './components/ShowNews';

console.clear();

function App() {

  const [input, setInput] = useState("");
  const [news, setNews] = useState([]);
  const [otherPage, setOtherPage] = useState(false);

  return (
    <div className="App">
      <NavBar input={input} setInput={setInput} otherPage={otherPage} setOtherPage={setOtherPage} />
      <Routes>
        <Route path='/' element={<Home input={input} setInput={setInput} news={news} setNews={setNews} otherPage={otherPage} setOtherPage={setOtherPage} />} />
        <Route path='/:id' element={<ShowNews news={news} />} />
      </Routes>
    </div>
  );
}

export default App;
