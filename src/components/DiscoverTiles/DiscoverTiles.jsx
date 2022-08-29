import './DiscoverTiles.css';
import BusinessPic from "../../assets/business.jpg";
import EntertainmentPic from "../../assets/entertainment.webp";
import TechnologyPic from "../../assets/technology.webp";
import TravelPic from "../../assets/travel.webp";

const arr = [BusinessPic, EntertainmentPic, TechnologyPic, TravelPic];
const name = ["Business", "Entertainment", "Technology", "Travel"];

function DiscoverTiles() {
    return (
        <>
            {arr.map((item, index) => {
                return (
                    <div className='DiscoverTile' key={index}>
                        <img src={item} />
                        <p>{name[index]}</p>
                    </div>
                )
            })}
        </>
    )
}

export default DiscoverTiles