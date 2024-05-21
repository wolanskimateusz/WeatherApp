import React from 'react'
import Card from 'react-bootstrap/Card'
import icons from "./icons.jpg"
import Button from 'react-bootstrap/Button'
import './TodayCard.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface Props {
  location : string
  temp_c : number
  icon : string
  wind : number
  humidity: number;
}

const TodayCard = ({location, temp_c, icon, wind, humidity}: Props) => {
  return (
    <Card bg='info' className='w-50 text-center d-flex flex-column align-items-center'>
        <Card.Header as="h2" className='w-100'>Today in {location}</Card.Header>
        <Card.Body>
        <Row className='align-items-center'>
        <Col xs={8} className='border-end d-flex flex-column align-items-center'>
            <Card.Img variant="top" src={icon} className='rounded-circle w-50 mt-2'/>
            <Card.Title>Temperature</Card.Title>
            <Card.Text as='h3'>{temp_c} &deg; C</Card.Text>
        </Col>
        <Col xs={4} className='d-flex flex-column align-items-center'>
            <Card.Text as='h3'>Wind</Card.Text>
            <Card.Text as='h4'>{wind} km/h</Card.Text>
            <Card.Text as='h3'>Humidity</Card.Text>
            <Card.Text as='h4'>{humidity}%</Card.Text>
        </Col>
        </Row>
        </Card.Body>
    </Card>
    
  )
}

export default TodayCard