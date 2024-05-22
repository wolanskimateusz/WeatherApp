import Card from 'react-bootstrap/Card'
import './TodayCard.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface Props {
  location : string
  temp_c : number
  icon : string
  wind : number
  humidity: number;
  feelslike : number
  text: string
  pressure: number
  chance_of_rain: number
}

const TodayCard = ({ location, temp_c, icon, wind, humidity, feelslike,text, pressure, chance_of_rain}:Props) => {
  return (
    <Card className='mx-auto my-2' style={{ maxWidth: '600px' }} bg='info'>
      <Card.Header as="h2" className='text-center'>Today in {location}</Card.Header>
      <Card.Body className='pb-4'>
        <Row className='align-items-center'>
          <Col xs={6} className='border-end d-flex flex-column align-items-center'>
          <Card.Text as ='h2'>{text}</Card.Text>
            <Card.Img src={icon} className='rounded-circle w-75' />
            <Card.Title className='mb-2'>Temperature | Feels Like</Card.Title>
            <Card.Text as='h3'>{temp_c} &deg;C | {feelslike} &deg;C </Card.Text>
          </Col>
          <Col xs={6} className='d-flex flex-column align-items-center'>
            <Card.Text as='h3'>Pressure</Card.Text>
            <Card.Text as='h5'>{pressure} mbar</Card.Text>
            <Card.Text as='h3'>Wind</Card.Text>
            <Card.Text as='h5'>{wind} km/h</Card.Text>
            <Card.Text as='h3'>Humidity</Card.Text>
            <Card.Text as='h5'>{humidity}%</Card.Text>
            <Card.Text as ='h3'>Chance of raining</Card.Text>
            <Card.Text as='h5'>{chance_of_rain}%</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};


export default TodayCard