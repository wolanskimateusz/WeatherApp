import React, { SyntheticEvent, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/form'

interface Props {
    onSearch: (location: string) => void;
}

const Search = ({onSearch}: Props) => {
    const [inputValue, setInputValue] = useState('Rzeszow');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(inputValue);
        setInputValue('');
    };

    return (
        <Container className='mt-3 text-center'>
        <Form onSubmit={handleSubmit} className='d-inline-flex align-items-center'>
          <Form.Group controlId="formLocation" className='d-flex me-2'>
            <Form.Label className="me-2 mb-0">Enter location</Form.Label>
            <Form.Control
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter location"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Container>
    );
};


export default Search