import React from 'react'
import Card from 'react-bootstrap/Card'
import icons from './icons.jpg'
import { useWeather } from '../../WeatherContext'


interface Props {
  temp: number
  icon: string
  date: string
}

const WeatherCard = ({temp,icon, date}: Props) => {

  const weatherData = useWeather();
  if (!weatherData) {
      return <div>Loading...</div>;
  }
  
  return (
    <Card bg='info' style={{width:'12rem'}} className='text-center'>
        <Card.Header> {date}</Card.Header>
        <Card.Body>
            <Card.Img src={icon} variant="top" className='rounded-circle w-50 mt-2'></Card.Img>
            <Card.Text>{temp} &deg; C</Card.Text>
        </Card.Body>

    </Card>
  )
}

export default WeatherCard