import { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import NavBar from './components/NavBar';
import NewsTile from './components/NewsTile/NewsTile';
import { API_KEY, API_URL } from './constants';
import { globalData } from './globalData'



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
      <div className='NewsTileWrapper'>
        {news.map((item, index) => {
          return (
            <NewsTile key={index} news={item} size={(index + 1) % 3 === 1 ? "large" : (index + 1) % 3 === 2 ? "small" : "medium"} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
