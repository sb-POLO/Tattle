import './ShowNews.css';
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';

function ShowNews({ news }) {
    const [data, setData] = useState(null);
    const { id } = useParams();
    let tempData;
    useEffect(() => {
        news.map((item, index) => {
            if (item.title === id.replaceAll("-", " "))
                tempData = item;
        })
        setData(tempData);
    }, [])
    return (
        <>
            {data !== null && <div className='ShowNewsContainer'>
                <h1>{data.title}</h1>
                <br />
                <h3>{data.description}</h3>
                <br />
                <h6>{data.source.name}</h6>
                <h6 id='ShowNewsDate'>{data.publishedAt}</h6>
                <br />
                <br />
                <img src={data.image} />
                <br />
                <br />
                <br />
                <h4>{data.content}</h4>
                <br />
                <br />
                <br />
                <h3>
                    <pre>Source:   <a href={data.url} target="_blank">{data.url}</a></pre>
                </h3>
                <br />
                <br />
                <br />
            </div>}
            <Footer />
        </>
    )
}

export default ShowNews