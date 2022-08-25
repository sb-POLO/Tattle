import './MiniNews2Flex.css';

function MiniNews2Flex({ news, color }) {
    return (
        <>
            <div className="Mini2FlexWrapper">
                <div className='MiniNews2Flex' style={{ backgroundImage: `url(${news.image})`, backgroundSize: "cover" }}>
                    <div className='Mini2FlexSource' style={{ backgroundColor: color }}>{news.source.url}</div>
                    <div className='Title2FlexWrapper'><p className='Mini2FlexTitle'>{news.title}</p></div>
                    <div className='Mini2FLexAuthorDate'>
                        <p className='Date' style={{ color: "gray" }}>{news.publishedAt}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniNews2Flex;