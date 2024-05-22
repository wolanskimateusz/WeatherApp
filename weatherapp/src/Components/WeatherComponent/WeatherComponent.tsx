import React from 'react'
import { useWeather } from '../../WeatherContext';
import TodayCard from '../TodayCard/TodayCard';
import WeatherCardList from '../WeatherCardList/WeatherCardList';
import { Row } from 'react-bootstrap';

interface Props  {}

const WeatherComponent = (props: Props) => {

    const weatherData = useWeather();
    if (!weatherData) {
        return <div>Loading...</div>;
    }
    
  return <>
  
  <Row className='d-flex justify-content-center p-3'>
  <TodayCard 
  location = {weatherData.location.name}
  temp_c = {weatherData.current.temp_c}
  icon = {weatherData.current.condition.icon}
  wind = {weatherData.current.wind_kph}
  humidity = {weatherData.current.humidity}
  feelslike = {weatherData.current.feelslike_c}
  text={weatherData.current.condition.text}
  pressure={weatherData.current.pressure_mb}
  chance_of_rain = {weatherData.forecast.forecastday[0].day.daily_chance_of_rain}
  />
  </Row>
  <Row className='d-flex justify-content-center' >
  <WeatherCardList></WeatherCardList>
  </Row>
  </>
   
  
}

export default WeatherComponent