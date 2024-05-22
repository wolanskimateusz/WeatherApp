import React from 'react'
import Card from 'react-bootstrap/Card'
import { useWeather } from '../../WeatherContext'


interface Props {
  temp: number
  icon: string
  date: string
  text: string
}

const WeatherCard = ({temp,icon, date,text}: Props) => {

  const weatherData = useWeather();
  if (!weatherData) {
      return <div>Loading...</div>;
  }
  
  return (
    <Card bg='info' style={{width:'12rem'}} className='text-center'>
        <Card.Header> {date}</Card.Header>
        <Card.Body>
        <Card.Text as ='h6'>{text}</Card.Text>
            <Card.Img src={icon} variant="top" className='rounded-circle w-75'></Card.Img>
        </Card.Body>
        <Card.Footer>{temp} &deg; C</Card.Footer>

    </Card>
  )
}

export default WeatherCard