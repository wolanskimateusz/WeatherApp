import React from 'react';
import './App.css';
import TodayCard from './Components/TodayCard/TodayCard';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';



function App() {
  return (
  <Container>
    <Row>
      <TodayCard></TodayCard>
     
    </Row>
    <Row>
      <TodayCard></TodayCard>
      <TodayCard></TodayCard>
      <TodayCard></TodayCard>
      <TodayCard></TodayCard>
      <TodayCard></TodayCard>

    </Row>
  </Container>
  );
}

export default App;
