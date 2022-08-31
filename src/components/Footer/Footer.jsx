import './Footer.css';
import { API_URL, API_KEY } from '../../constants';

function Footer({ news, setNews, setLoading, language, setDiscover }) {

    async function getNews(param) {
        const finalUrl = `${API_URL}?q=${param}&token=${API_KEY}&lang=${language}`
        const response = await fetch(finalUrl);
        const data = await response.json();
        return data.articles;
    }

    function updateNews(data) {
        setLoading(true);
        let arr = [];
        (async () => {
            while (arr.length < 30) {
                let newData = await getNews(data);
                arr = await [...arr, ...newData];
            }
            setLoading(false);
            setDiscover(true);
            setNews([...arr, ...news]);
        })()
    }

    return (
        <>
            <div className='Footer'>
                <h4>
                    We influence users and is the number one business and technology news network on the planet
                </h4>
                <div className='FooterCategoriesWrapper'>
                    <h3>Top categories</h3>
                    <h5 onClick={() => updateNews("business")}>Business</h5>
                    <h5 onClick={() => updateNews("politics")}>Politics</h5>
                    <h5 onClick={() => updateNews("tech")}>Tech</h5>
                    <h5 onClick={() => updateNews("health")}>Health</h5>
                </div>
                <div className='FooterSocialWrapper'>
                    <h3>Follow Us</h3>
                    <a href='https://www.facebook.com/POLO99321' target="_blank">Facebook</a>
                    <a href='https://twitter.com/polo99321' target="_blank">Instagram</a>
                    <a href='https://www.instagram.com/s.polo.b/' target="_blank">Twitter</a>
                    <a href='https://www.linkedin.com/in/souravbanerjee98/' target="_blank">LinkedIn</a>
                </div>
            </div>
        </>
    )
}

export default Footer