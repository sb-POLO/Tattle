import { useNavigate } from 'react-router-dom';
import './ReadMore.css';

function ReadMore({ news, color, num }) {
    const navigate = useNavigate();
    return (
        <>
            <div className='ReadMoreTile'>
                <img src={news.image} />
                <div className='ReadMoreSource' style={{ backgroundColor: color }}>{news.source.url}</div>
                <p className='ReadMoreMiniTitle' onClick={() => navigate(`/${news.title.replaceAll(" ", "-")}`)}>{news.title}</p>
                <div className='ReadMoreAuthorDate'>
                    <p className='Author'>{news.source.name}</p>
                    ||
                    <p className='Date' style={{ color: "gray" }}>{news.publishedAt}</p>
                </div>
            </div>
        </>
    )
}

export default ReadMore;