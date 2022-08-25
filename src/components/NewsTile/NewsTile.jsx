import './NewsTile.css';

function NewsTile({ news, size }) {
    return (
        <>
            <div className={size === "large" ? "NewsTileLarge" : size === "small" ? "NewsTileSmall" : "NewsTileMedium"} style={{ backgroundImage: `url(${news.image})` }}>
                <div className={size === "large" ? 'NewsTileSourceLarge' : 'NewsTileSourceSmall'}>{news.source.url}</div>
                <div className='NewsTileInfo'>
                    <p className='NewsTileTitle'>{news.title}</p>
                    <p className='NewsTileDes'>{news.description}</p>
                    <div className='AuthorDate'>
                        <span className='A' style={{ color: "red" }}>Author:</span>
                        <p className='NewTileAuthor'>{news.source.name}</p>
                        ||
                        <p className='NewTileDate' style={{ color: "gray" }}>{news.publishedAt}</p>
                    </div>
                </div>
                {console.log(news)}
            </div>
        </>
    )
}

export default NewsTile;