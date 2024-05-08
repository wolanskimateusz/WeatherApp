import React from 'react'
import Card from 'react-bootstrap/Card'
import icons from "./icons.jpg"
import Button from 'react-bootstrap/Button'
import './TodayCard.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface Props {}

const TodayCard = (props: Props) => {
  return (
    <Card bg='info' className='w-50 text-center d-flex flex-column align-items-center'>
        <Card.Header as="h2" className='w-100'>Today</Card.Header>
        <Card.Body>
        <Row className='align-items-center'>
        <Col xs={8} className='border-end d-flex flex-column align-items-center'>
            <Card.Img variant="top" src={icons} className='rounded-circle w-50 mt-2'/>
            <Card.Title>Temperature</Card.Title>
            <Card.Text as='h3'>21 C</Card.Text>
        </Col>
        <Col xs={4} className='d-flex flex-column align-items-center'>
            <Card.Text as='h3'>Wind</Card.Text>
            <Card.Text as='h4'>14 km/h</Card.Text>
            <Card.Text as='h3'>Humidity</Card.Text>
            <Card.Text as='h4'>83%</Card.Text>
        </Col>
        </Row>
        </Card.Body>
    </Card>
    
  )
}

export default TodayCard