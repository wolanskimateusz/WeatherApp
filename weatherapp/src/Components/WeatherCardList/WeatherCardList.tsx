import React from 'react'
import WeatherCard from '../WeatherCard/WeatherCard'
import { useWeather } from '../../WeatherContext';

type Props = {}

const WeatherCardList = (props: Props) => {

  const weatherData = useWeather();
    if (!weatherData) {
        return <div>Loading...</div>;
    }


  return (
   <>
     <WeatherCard date={weatherData.forecast.forecastday[1].date} text={weatherData.forecast.forecastday[1].day.condition.text}
     temp= {weatherData.forecast.forecastday[1].day.avgtemp_c} icon = {weatherData.forecast.forecastday[1].day.condition.icon}></WeatherCard>
     <WeatherCard date={weatherData.forecast.forecastday[2].date} text={weatherData.forecast.forecastday[2].day.condition.text}
     temp= {weatherData.forecast.forecastday[2].day.avgtemp_c} icon = {weatherData.forecast.forecastday[2].day.condition.icon}></WeatherCard>
     <WeatherCard date={weatherData.forecast.forecastday[3].date} text={weatherData.forecast.forecastday[3].day.condition.text}
     temp= {weatherData.forecast.forecastday[3].day.avgtemp_c} icon = {weatherData.forecast.forecastday[3].day.condition.icon}></WeatherCard>
     <WeatherCard date={weatherData.forecast.forecastday[4].date} text={weatherData.forecast.forecastday[4].day.condition.text}
     temp= {weatherData.forecast.forecastday[4].day.avgtemp_c} icon = {weatherData.forecast.forecastday[4].day.condition.icon}></WeatherCard>
     <WeatherCard date={weatherData.forecast.forecastday[5].date} text={weatherData.forecast.forecastday[5].day.condition.text}
     temp= {weatherData.forecast.forecastday[5].day.avgtemp_c} icon = {weatherData.forecast.forecastday[5].day.condition.icon}></WeatherCard>
     <WeatherCard date={weatherData.forecast.forecastday[6].date} text={weatherData.forecast.forecastday[6].day.condition.text}
     temp= {weatherData.forecast.forecastday[6].day.avgtemp_c} icon = {weatherData.forecast.forecastday[6].day.condition.icon}></WeatherCard>
     <WeatherCard date={weatherData.forecast.forecastday[7].date} text={weatherData.forecast.forecastday[7].day.condition.text}
     temp= {weatherData.forecast.forecastday[7].day.avgtemp_c} icon = {weatherData.forecast.forecastday[7].day.condition.icon}></WeatherCard>
   </>
  )
}

export default WeatherCardList