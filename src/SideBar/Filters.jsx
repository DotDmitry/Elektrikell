import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {convertToInputFormat,convertToRequstFormat} from "../utils/dates"

function Filters(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const from =convertToRequstFormat(event.target.filtersFrom.value) ;
        props.setfilterFrom(from);

        const until = convertToRequstFormat(event.target.filtersUntil.value);
        props.setfilterUntil(until);

        console.log('from:', from);
        props.handleClose();
    };

    //console.log('from:', props.filterFrom);

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="filtersFrom">
                    <Form.Label>From</Form.Label>
                    <Form.Control defaultValue={convertToInputFormat(props.filterFrom)} name="filtersFrom"
                        type="datetime-local" placeholder="Enter start date" />
                    {/*<Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="filtersUntil">
                    <Form.Label>Until</Form.Label>
                    <Form.Control defaultValue={convertToInputFormat(props.filterUntil)} name="filtersUntil"
                        type="datetime-local" placeholder="Enter last date" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </>
    );
}

export default Filters;