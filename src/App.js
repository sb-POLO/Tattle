import { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import MiniNews from './components/MiniNews';
import MiniNews2 from './components/MiniNews2/MiniNews2';
import MiniNews2Flex from './components/MiniNews2Flex/MiniNews2Flex';
import NavBar from './components/NavBar';
import NewsTile from './components/NewsTile/NewsTile';
import SocialMedia from './components/SocialMedia/SocialMedia';
import Weather from './components/Weather/Weather';
import { API_KEY, API_URL } from './constants';
import { globalData } from './globalData'

console.clear();

const tileColor = ["red", "lightseagreen", "orange", "deeppink"]

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
      <div className='EditorsPick'>
        {news.slice(5, 6).map((item, index) => {
          return (
            <MiniNews2 key={index} news={item} color={tileColor[3]} />
          )
        })}
        <div className='EditorsPickFlexAlign'>
          <div className='EditorsPickFlexNews'>
            {news.slice(6, 9).map((item, index) => {
              return (
                <MiniNews2Flex key={index} news={item} color={tileColor[index % 4]} />
              )
            })}
          </div>
        </div>
        <Weather />
        <div className='FollowUsHeader'>
          <div className='LeanSmall'></div>
          <span className='FollowUsTitle'>Follow US</span>
          <div className='LeanSmall'></div>
        </div>
        <SocialMedia />
      </div>
      <br />
      <br />
      <br />
      <div className='MostReadContainer'>

      </div>
    </div>
  );
}

export default App;
