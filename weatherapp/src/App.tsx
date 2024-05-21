
import './App.css';

import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import WeatherCardList from './Components/WeatherCardList/WeatherCardList';

import WeatherComponent from './Components/WeatherComponent/WeatherComponent';
import { WeatherProvider } from './WeatherContext';
import Search from './Components/Search/Search';
import { useState } from 'react';



function App() {

  const [location, setLocation] = useState<string>('Rzeszow')

  return (
  <Container fluid>
    <Row className='justify-content-center mb-5 mt-2'>
      <Search onSearch={setLocation} />
      <WeatherProvider search={location}>
        <WeatherComponent/>
      </WeatherProvider>
    </Row>
  </Container>
  );
}

export default App;
