import './NewsTile.css';

function NewsTile({ news, size, color }) {
    return (
        <>
            <div className={size === "large" ? "TileWrapperLarge" : size === "small1" ? "TileWrapperSmall1" : "TileWrapperSmall2"}>
                <div className={size === "large" ? "NewsTileLarge" : "NewsTileSmall"} style={{ backgroundImage: `url(${news.image})`, backgroundSize: "cover" }}>
                    <div className={size === "large" ? 'NewsTileSourceLarge' : 'NewsTileSourceSmall'} style={{ backgroundColor: color }}>{news.source.url}</div>
                    <div className='NewsTileInfo'>
                        <p className='NewsTileTitle'>{news.title}</p>
                        {size === "large" && <p className='NewsTileDes'>{news.description}</p>}
                        <div className='AuthorDate'>
                            <span className='A' style={{ color: color }}>Author:</span>
                            <p className='NewsTileAuthor'>{news.source.name}</p>
                            ||
                            <p className='NewsTileDate' style={{ color: "gray" }}>{news.publishedAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsTile;