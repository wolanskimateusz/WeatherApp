import React from 'react';
import './App.css';
import TodayCard from './Components/TodayCard/TodayCard';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import WeatherCard from './Components/WeatherCard/WeatherCard';



function App() {
  return (
  <Container fluid>
    <Row className='justify-content-center mb-5 mt-2'>
      <TodayCard></TodayCard>
     
    </Row>
    <Row className='justify-content-center mb-5 mt-2'>
     <WeatherCard></WeatherCard>
     <WeatherCard></WeatherCard>
     <WeatherCard></WeatherCard>
     <WeatherCard></WeatherCard>
     <WeatherCard></WeatherCard>
     <WeatherCard></WeatherCard>
     <WeatherCard></WeatherCard>
    </Row>
  </Container>
  );
}

export default App;
