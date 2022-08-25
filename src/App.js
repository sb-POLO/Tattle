import { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import MiniNews from './components/MiniNews';
import NavBar from './components/NavBar';
import NewsTile from './components/NewsTile/NewsTile';
import { API_KEY, API_URL } from './constants';
import { globalData } from './globalData'

const tileColor = ["red", "lightseagreen", "orange"]

function App() {
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const [news, setNews] = useState([]);
  useEffect(() => {
    (async () => {
      setLoading(true);
      // const finalUrl = `${API_URL}?q=india&token=${API_KEY}&lang=${language}`
      // const response = await fetch(finalUrl);
      // const data = await response.json();
      // globalData = data.articles;
      setNews(globalData);
      setLoading(false);
    })();
  }, [])
  return (
    <div className="App">
      <NavBar />
      {loading && <Loader />}
      <div className='NewsTileWrapper1'>
        {news.slice(0, 3).map((item, index) => {
          return (
            <NewsTile key={index} news={item} size={(index + 1) % 3 === 1 ? "large" : (index + 1) % 3 === 2 ? "small1" : "small2"} color={tileColor[index % 3]} />
          )
        })}
      </div>
      <br />
      <br />
      <div className='MiniNewsWrapper1'>
        {news.slice(3, 5).map((item, index) => {
          return (
            <MiniNews key={index} news={item} color={tileColor[index % 3]} num={index} />
          )
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className='Header'>
        <div className='Lean'></div>
        <span className='HeaderTitle'>Editior's Pick</span>
        <div className='Lean'></div>
      </div>
      <br />
      <br />
      <div></div>
    </div>
  );
}

export default App;
