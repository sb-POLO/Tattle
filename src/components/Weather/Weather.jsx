import './Weather.css';
import { WEATHER_KEY, WEATHER_API, WEATHER_ICON } from '../../constants';
import { useState } from 'react';
import { useEffect } from 'react';

function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [weatherLoad, setWeatherLoad] = useState(false);

    const success = async ({ coords }) => {
        const { latitude, longitude } = coords;
        const finalURL = `${WEATHER_API}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}&units=metric`;
        const response = await fetch(finalURL);
        const data = await response.json();
        setWeatherLoad(false);
        setWeatherInfo(data);
        console.log(data);
    }

    const error = () => {
        console.log("Error retrieving weather data");
    }

    useEffect(() => {
        setWeatherLoad(true);
        navigator.geolocation.getCurrentPosition(success, error);
    }, [])
    return (
        <>
            <div className='WeatherWrapper'>
                {Object.keys(weatherInfo).length !== 0 && <div className='WeatherContainer'>
                    <div className='WeatherTitle'>Weather</div>
                    <img id="WeatherIcon" src={`${WEATHER_ICON}${weatherInfo.weather[0].icon}@2x.png`} />
                    <div className='Temp'>{Math.floor(weatherInfo.main.temp)}<sup>&#8451;</sup></div>
                    <p className='Location'>{weatherInfo.name}</p>
                    <p className='Weather'>{weatherInfo.weather[0].main}</p>
                    <span className='WindIcon'>Wind:</span>
                    <p className='Wind'>{weatherInfo.wind.speed} km/h</p>
                    <span className='HumidIcon'>Humidity:</span>
                    <p className='Humid'>{weatherInfo.main.humidity}</p>
                    <p className='WeatherDate'>{new Intl.DateTimeFormat("en-US", {
                        weekday: "long",
                        month: "long",
                        year: "numeric",
                        day: 'numeric'}).format(new Date())}</p>
                </div>}
            </div>
        </>
    )
}

export default Weather;