import './NewsTile2.css';

function NewsTile2({ news, size, color }) {
    return (
        <>
            <div className={size === "large" ? "TileWrapper2Large" : size === "small1" ? "TileWrapper2Small1" : "TileWrapper2Small2"}>
                <div className={size === "large" ? "NewsTile2Large" : "NewsTile2Small"} style={{ backgroundImage: `url(${news.image})`, backgroundSize: "cover" }}>
                    <div className={size === "large" ? 'NewsTile2SourceLarge' : 'NewsTile2SourceSmall'} style={{ backgroundColor: color }}>{news.source.url}</div>
                    <div className='NewsTile2Info'>
                        <p className='NewsTile2Title'>{news.title}</p>
                        <div className='AuthorDate'>
                            <span className='A' style={{ color: color }}>Author:</span>
                            <p className='NewsTileAuthor'>{news.source.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsTile2;