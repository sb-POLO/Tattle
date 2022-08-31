import './MiniNews.css';
import { useNavigate } from 'react-router-dom';

function MiniNews({ news, color, num }) {
    const navigate = useNavigate();
    return (
        <>
            <div className={num === 0 ? "MiniWrapper1" : "MiniWrapper2"}>
                <div className='MiniNews'>
                    <div className='MiniSource' style={{ backgroundColor: color }}>{news.source.url}</div>
                    <div className='TitleWrapper'><p className='MiniTitle' onClick={() => navigate(`/${news.title.replaceAll(" ", "-")}`)}>{news.title}</p></div>
                    <img src={news.image} />
                    <div className='MiniAuthorDate'>
                        <p className='Author'>{news.source.name}</p>
                        ||
                        <p className='Date' style={{ color: "gray" }}>{news.publishedAt}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniNews;