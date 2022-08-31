import { useEffect, useState } from 'react';
import './Home.css';
import DiscoverTiles from '../DiscoverTiles';
import MiniNews from '../MiniNews';
import MiniNews2 from '../MiniNews2/MiniNews2';
import MiniNews2Flex from '../MiniNews2Flex/MiniNews2Flex';
import NewsTile from '../NewsTile/NewsTile';
import NewsTile2 from '../NewsTile2/NewsTile2';
import SocialMedia from '../SocialMedia/SocialMedia';
import Weather from '../Weather/Weather';
import { API_KEY, API_URL } from '../../constants';
import { globalData } from '../../globalData';
import ReadMore from '../ReadMoreTile';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Loader from '../Loader';


const tileColor = ["red", "lightseagreen", "orange", "deeppink"];
let timeoutID = null;

function Home({ input, setInput, news, setNews, otherPage, setOtherPage }) {
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState("en");
    const [lastIndex, setLastIndex] = useState(32);
    const [initialLoad, setInitialLoad] = useState(true);
    const [discover, setDiscover] = useState(false);

    async function getNews() {
        const finalUrl = `${API_URL}?q=${input}&token=${API_KEY}&lang=${language}`
        const response = await fetch(finalUrl);
        const data = await response.json();
        return data.articles;
    }

    useEffect(() => {
        (async () => {
            setLoading(true);
            // const finalUrl = `${API_URL}?q=india&token=${API_KEY}&lang=${language}`
            // const response = await fetch(finalUrl);
            // const data = await response.json();
            // globalData = data.articles;
            setNews(globalData);
            setLoading(false);
            setInitialLoad(false);
        })();
    }, [])

    useEffect(() => {
        if (!initialLoad) {
            if (input === "" && !discover) {
                setLoading(false);
                clearTimeout(timeoutID);
                setNews(globalData);
                return;
            }
            setDiscover(false);
            setLoading(true);
            let arr = [];
            clearTimeout(timeoutID);
            timeoutID = setTimeout(() => {
                (async () => {
                    while (arr.length < 30) {
                        let newData = await getNews();
                        arr = await [...arr, ...newData];
                    }
                    setLoading(false);
                    setNews([...arr, ...news]);
                })()
            }, [1500])
        }
    }, [input])

    useEffect(() => {
        if (otherPage) {
            setOtherPage(false);
            if (input === "") {
                setNews(globalData);
                return;
            }
            setLoading(true);
            let arr = [];
            clearTimeout(timeoutID);
            timeoutID = setTimeout(() => {
                (async () => {
                    while (arr.length < 30) {
                        let newData = await getNews();
                        console.log(newData);
                        arr = await [...arr, ...newData];
                    }
                    setLoading(false);
                    setNews([...arr, ...news]);
                })()
            }, [1500])
        }
    }, [otherPage])

    return (
        <>
            {loading && <Loader />}
            {!loading && <>
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
                <div className='MostReadContainer'>
                    <div className='MostReadHeader'>
                        <div className='Lean'></div>
                        <span className='MostReadTitle'>Most Read</span>
                        <div className='Lean'></div>
                    </div>
                    {news.slice(9, 12).map((item, index) => {
                        return (
                            <NewsTile2 key={index} news={item} size={(index + 1) % 3 === 1 ? "large" : (index + 1) % 3 === 2 ? "small1" : "small2"} color={tileColor[index % 3]} />
                        )
                    })}
                    <div className='MostReadFlexAlign'>
                        <div className='MostReadFlexNews'>
                            {news.slice(12, 16).map((item, index) => {
                                return (
                                    <MiniNews2Flex key={index} news={item} color={tileColor[index % 4]} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='DiscoverContainer'>
                    <div className='DiscoverHeader'>
                        <div className='Lean'></div>
                        <span className='DiscoverTitle'>Discover Categories</span>
                        <div className='Lean'></div>
                    </div>
                    <div className='DiscoverWrapper'>
                        <DiscoverTiles news={news} setNews={setNews} setLoading={setLoading} language={language} setDiscover={setDiscover} />
                    </div>
                </div>
                <div className='TrendingContainer'>
                    <div className='MostReadHeader'>
                        <div className='Lean'></div>
                        <span className='DiscoverTitle'>Trending</span>
                        <div className='Lean'></div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br /><br />
                    <br />
                    <div className='NewsTileWrapper1'>
                        {news.slice(16, 20).map((item, index) => {
                            return (
                                <NewsTile key={index} news={item} size={(index + 1) % 3 === 1 ? "large" : (index + 1) % 3 === 2 ? "small1" : "small2"} color={tileColor[index % 3]} />
                            )
                        })}
                    </div>
                    <br />
                    <br />
                    <div className='MiniNewsWrapper1'>
                        {news.slice(20, 22).map((item, index) => {
                            return (
                                <MiniNews key={index} news={item} color={tileColor[index % 3]} num={index} />
                            )
                        })}
                    </div>
                </div>
                <div className='ReadMoreHeader'>
                    <div className='Lean'></div>
                    <span className='DiscoverTitle'>Read More</span>
                    <div className='Lean'></div>
                </div>
                <div className='ReadMoreContainer'>
                    <div className='ReadMoreTilesContainer'>
                        {news.slice(22, lastIndex).map((item, index) => {
                            return (
                                <ReadMore key={index} news={item} color={tileColor[index % 4]} num={index} />
                            )
                        })}
                    </div>
                    {lastIndex < globalData.length && <button id="showMore" onClick={() => { setLastIndex((prevState) => prevState + 6) }}>Show More</button>}
                </div>
                <br />
                <br />
                <br />
                <Footer news={news} setNews={setNews} setLoading={setLoading} language={language} setDiscover={setDiscover} />
            </>}
        </>
    )
}

export default Home