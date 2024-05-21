import React, { SyntheticEvent, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
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
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formLocation">
                <Form.Label>Enter location</Form.Label>
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
    );
};

export default Search