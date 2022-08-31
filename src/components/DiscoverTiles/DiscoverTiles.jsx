import './DiscoverTiles.css';
import BusinessPic from "../../assets/business.jpg";
import EntertainmentPic from "../../assets/entertainment.webp";
import TechnologyPic from "../../assets/technology.webp";
import TravelPic from "../../assets/travel.webp";
import { useEffect } from 'react';
import { API_URL, API_KEY } from '../../constants';

const arr = [BusinessPic, EntertainmentPic, TechnologyPic, TravelPic];
const name = ["Business", "Entertainment", "Technology", "Travel"];

function DiscoverTiles({ news, setNews, setLoading, language, setDiscover }) {

    async function getNews(param) {
        const finalUrl = `${API_URL}?q=${param}&token=${API_KEY}&lang=${language}`
        const response = await fetch(finalUrl);
        const data = await response.json();
        return data.articles;
    }

    function updateNews(index) {
        setLoading(true);
        let arr = [];
        (async () => {
            while (arr.length < 30) {
                let newData = await getNews(name[index].toLowerCase());
                arr = await [...arr, ...newData];
            }
            setLoading(false);
            setDiscover(true);
            setNews([...arr, ...news]);
        })()
    }

    return (
        <>
            {arr.map((item, index) => {
                return (
                    <div className='DiscoverTile' key={index}>
                        <img src={item} />
                        <p onClick={() => updateNews(index)}>{name[index]}</p>
                    </div>
                )
            })}
        </>
    )
}

export default DiscoverTiles