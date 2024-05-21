import React from 'react'
import { useWeather } from '../../WeatherContext';
import TodayCard from '../TodayCard/TodayCard';
import WeatherCardList from '../WeatherCardList/WeatherCardList';

interface Props  {}

const WeatherComponent = (props: Props) => {

    const weatherData = useWeather();
    if (!weatherData) {
        return <div>Loading...</div>;
    }
    
  return <>
  <TodayCard 
  location = {weatherData.location.name}
  temp_c = {weatherData.current.temp_c}
  icon = {weatherData.current.condition.icon}
  wind = {weatherData.current.wind_kph}
  humidity = {weatherData.current.humidity}
  />
  <WeatherCardList></WeatherCardList>
  
  </>
   
  
}

export default WeatherComponent