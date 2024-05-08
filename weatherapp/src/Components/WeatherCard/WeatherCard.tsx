import React from 'react'
import Card from 'react-bootstrap/Card'
import icons from './icons.jpg'


type Props = {}

const WeatherCard = (props: Props) => {
  return (
    <Card bg='info' style={{width:'12rem'}} className='text-center'>
        <Card.Header> Day of The Week</Card.Header>
        <Card.Body>
            <Card.Img src={icons} variant="top" className='rounded-circle w-50 mt-2'></Card.Img>
            <Card.Text>25 stopni</Card.Text>
        </Card.Body>

    </Card>
  )
}

export default WeatherCard