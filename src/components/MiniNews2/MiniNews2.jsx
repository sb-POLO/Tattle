import './MiniNews2.css'

function MiniNews2({ news, color }) {
    return (
        <>
            <div className="Mini2Wrapper">
                <div className='MiniNews2'>
                    <div className='Title2Wrapper'><p className='Mini2Title'>{news.title}</p></div>
                    <div className='Desc2Wrapper'><p className='Desc2Title'>{news.description}</p></div>
                    <img src={news.image} />
                    <div className='Mini2AuthorDate'>
                        <p className='Author'>{news.source.name}</p>
                        ||
                        <p className='Date' style={{ color: "gray" }}>{news.publishedAt}</p>
                    </div>
                    <div className='Mini2Source' style={{ backgroundColor: color }}>{news.source.url}</div>
                </div>
            </div>
        </>
    )
}

export default MiniNews2;